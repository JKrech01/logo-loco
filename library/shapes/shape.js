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
        return `<circle cx="100" cy="100" r="80" fill="${this.color}" fill="${textColor}" "${text}" />`
    }
}

class triangle extends shape{
    render(){
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" fill="${textColor}" "${text}"/>`
    }
}

class square extends shape{
    render(){
        return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" fill="${textColor}" "${text}" />`
    }
};

module.exports = {circle, square, triangle}