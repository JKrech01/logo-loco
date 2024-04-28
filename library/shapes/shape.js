class shape{
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}

class circle extends shape{
    render(){
        return `<circle cx="50" cy="50" r="100" height="100"= width"100" fill="${this.color}" />`
    }
}

class triangle extends shape{
    render(){
        return `<polygon heigh="100" width="100" points="100,100 300,100 200,200 fill="${this.color}" />`
    }
}

class square extends shape{
    render(){
        return `<rect height="100" width="100" fill="${this.color}" />`
    }
};

module.exports = {circle, square, triangle}