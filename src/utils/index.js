
export function formatDate(dateString) {
    const date = new Date(dateString)

    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear()

    const daySuffix = getDaySuffix(day)

    return `${day}${daySuffix} ${month} ${year}`
}

function getDaySuffix(day) {
    if (day > 3 && day < 21) return 'th'
    switch (day % 10) {
        case 1:
            return 'st'
        case 2:
            return 'nd'
        case 3:
            return 'rd'
        default:
            return 'th'
    }
}

export const getNestedHeadings = (headingElements) => {
    const nestedHeadings = []

    headingElements.forEach((heading) => {
        const { textContent: title = '', id } = heading

        if (!title) return false

        if (heading.nodeName === 'H2') {
            nestedHeadings.push({ id, title, items: [] })
        } else if (heading.nodeName === 'H3') {
            if (nestedHeadings.length > 0) {
                nestedHeadings[nestedHeadings.length - 1].items.push({
                    id,
                    title,
                    items: [],
                })
            } else {
                nestedHeadings.push({ id, title, items: [] })
            }
        }
    })

    return nestedHeadings
}

export function isInViewport(element, callback, threshold = 0.4) {
    const observer = new IntersectionObserver(
        (entries) => {
            const [entry] = entries

            if (entry.isIntersecting) {
                console.log('Element has entered the viewport')
                callback()
            }
        },
        {
            threshold: threshold,
        },
    )

    observer.observe(element)

    return observer
}
