function customRender(reactElement,container){
    const domelem = document.createElement(reactElement.type)
    domelem.innerHtml = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children'){
            continue
        }
        domelem.setAttribute (prop,reactElement.props[prop])

    }
     container.appendChild(domelem)
}
const reactElement = {
    type: 'a',
    props : {
        href : "https://www.google.com",
        target : '_blank'
    },
    children : 'Hello World'
}

const maincontainer=document.getElementById('root')

customRender(reactElement,maincontainer) 