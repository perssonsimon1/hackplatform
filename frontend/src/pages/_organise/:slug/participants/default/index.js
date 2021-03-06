import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, useRouteMatch } from 'react-router-dom'
import { FilterHelpers } from '@hackjunction/shared'

import * as OrganiserSelectors from 'redux/organiser/selectors'

import Divider from 'components/generic/Divider'
import AttendeeTable from 'components/tables/AttendeeTable'
import FilterGroupMenu from 'components/filters/FilterGroupMenu'

export default () => {
    const registrations = useSelector(OrganiserSelectors.registrations)
    const registrationsLoading = useSelector(
        OrganiserSelectors.registrationsLoading
    )

    const match = useRouteMatch()
    const [filters, setFilters] = useState([])
    const filtered = FilterHelpers.applyFilters(registrations, filters)

    return (
        <React.Fragment>
            <FilterGroupMenu onChange={setFilters} />
            <Divider size={1} />
            <AttendeeTable
                attendees={filtered}
                loading={registrationsLoading}
            />
        </React.Fragment>
    )
}
