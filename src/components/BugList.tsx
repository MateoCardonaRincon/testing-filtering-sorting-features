import React, { useEffect, useState } from 'react'
import { bugType } from '../state/bugSlice'

type Props = {
    bugs: bugType[]
}

const BugList: React.FC<Props> = ({ bugs }) => {

    const [bugList, setBugList] = useState<bugType[]>([])

    const [ascending, setAscending] = useState(false)

    useEffect(() => {
        setBugList([...bugs])
    }, [bugs])
    

    const orderColumn = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {

        const orderBy = event.currentTarget.id as keyof bugType

        const sortedBugList = bugList.sort((row1, row2) =>
            row1[orderBy].toString() > row2[orderBy].toString() ? (ascending ? -1 : 1) : (ascending ? 1 : -1))

        setBugList([...sortedBugList])
        setAscending(!ascending)
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Id
                        <span id="bugId" onClick={orderColumn}><b>⇅</b></span>
                    </th>
                    <th>Title
                        <span id="title" onClick={orderColumn}><b>⇅</b></span>
                    </th>
                    <th>Developer Email
                        <span id="developerEmail" onClick={orderColumn}><b>⇅</b></span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {bugList.map((bug) =>
                    <tr key={bug.bugId}>
                        <td>{bug.bugId}</td>
                        <td>{bug.title}</td>
                        <td>{bug.developerEmail}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default BugList