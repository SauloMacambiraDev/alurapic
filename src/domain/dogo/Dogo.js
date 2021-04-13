export default class Dogo {
    constructor(id = Math.round(Math.random() * 100) , url='@/assets/imgs/no-photo-available.png', name = 'Not Identified Dog') {
        this.id = id;
        this.url = url;
        this.name = name;
    }
}