import { bugType } from "../state/bugSlice"

const hardCodedBugs: bugType[] = [
    {
        bugId: 1,
        title: "Bug testing",
        developerEmail: "dev2@gmail.com"
    },
    {
        bugId: 2,
        title: "A hardcoded bug",
        developerEmail: "mcr@gmail.com"
    },
    {
        bugId: 3,
        title: "This is a bug",
        developerEmail: "dev1@sofka.com"
    },
    {
        bugId: 4,
        title: "Just another bug",
        developerEmail: "codevengers@sofkau.com"
    }
]

export const getBugs = (): bugType[] => {
    return hardCodedBugs
}

