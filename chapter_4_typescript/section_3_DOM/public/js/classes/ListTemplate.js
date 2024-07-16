export class ListTemplate {
    constructor(listContainer) {
        this.listContainer = listContainer;
    }
    render(item, heading, pos) {
        const listElement = document.createElement("li");
        const h4HeaderElement = document.createElement("h4");
        h4HeaderElement.innerText = heading;
        listElement.append(h4HeaderElement);
        const paraElement = document.createElement('p');
        paraElement.innerText = item.format();
        listElement.append(paraElement);
        if (pos === "start") {
            this.listContainer.prepend(listElement);
        }
        else {
            this.listContainer.append(listElement);
        }
    }
}
