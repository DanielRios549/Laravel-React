const CLASS_NAME = 'open'

export function clickToggle(event: any, itemClass?: string) {
    // `element` is the element that listen the click
    // `item` is the element that receives the class

    const element: Element = event.currentTarget
    let item: Element = element

    if (itemClass && itemClass !== 'next') {
        item = document.querySelector(itemClass) || item
    }
    else {
        item = element.nextElementSibling || item
    }

    item.classList.toggle(CLASS_NAME)

    function outClick(event: any) {
        if ((!item.contains(event.target)) && (!element?.contains(event.target))) {
            item.classList.remove(CLASS_NAME)
            document.body.removeEventListener('click', outClick, true)
        }
    }

    document.body.addEventListener('click', outClick, true)
}
