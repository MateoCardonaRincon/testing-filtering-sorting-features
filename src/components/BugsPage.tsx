import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { bugType } from '../state/bugSlice';
import { storeType } from '../state/store';
import BugList from './BugList';

type Props = {}

const BugsPage: React.FC<Props> = (props) => {

    const filterOptions = ["bugId", "title", "developerEmail"]

    const bugs = useSelector((state: storeType) => state.bugs);

    const [filterBy, setFilter] = useState("")

    const [filterCriteria, setFilterCriteria] = useState("")

    const [bugListToFilter, setFilteredList] = useState<bugType[]>([])

    useEffect(() => {
        setFilteredList([...bugs])
    }, [bugs])

    const onReload = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        setFilteredList([...bugs])
        setFilterCriteria("")
    }

    // useEffect(() => {
    //     const filteredList = bugs.filter(bug =>
    //         bug[filterCriteria as keyof bugType].toString().toLowerCase().includes(filterBy.toLowerCase()))
    //     setFilteredList([...filteredList])
    // }, [filterBy, filterCriteria])

    const onFilterBug = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()

        const filteredList = bugListToFilter.filter(bug =>
            bug[filterBy as keyof bugType].toString().toLowerCase().includes(filterCriteria.toLowerCase()))

        setFilteredList([...filteredList])
        setFilterCriteria("")
    }

    return (
        <div>
            <form>
                <select name="filter-criteria" onChange={(e) => setFilter(e.target.value)}>
                    <option value="">Filter by...</option>
                    {filterOptions.map(filterOption => {
                        return <option value={filterOption} key={filterOption}>{`${filterOption}`}</option>
                    }

                    )}
                </select>
                <input type="text" name="filter"
                    value={filterCriteria}
                    onChange={(e) => setFilterCriteria(e.target.value)}
                    placeholder="Filter criteria" required />
                <button onClick={onFilterBug}>Filter</button>
                <button onClick={onReload}>Reload Data</button>
            </form>
            <BugList bugs={bugListToFilter} />
        </div>
    )
}

export default BugsPage