'use client'

import { getNestedHeadings } from '@/utils'
import { useEffect, useState } from 'react'

const useHeadingsData = () => {
    const [nestedHeadings, setNestedHeadings] = useState([])

    useEffect(() => {
        const headingElements = Array.from(document.querySelectorAll('main h2, main h3'))

        const newNestedHeadings = getNestedHeadings(headingElements)
        setNestedHeadings(newNestedHeadings)
    }, [])

    return nestedHeadings
}

export default useHeadingsData
