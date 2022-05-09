function newImage(url, left, bottom){
let myFunc = document.createElement('img')
myFunc.src = url
myFunc.style.position = 'fixed'
myFunc.style.left = left + 'px'
myFunc.style.bottom = bottom + 'px'
document.body.append(myFunc)
return myFunc
}

function newItem(url, left, bottom){
    let myFunc = newImage(url, left, bottom)

    myFunc.addEventListener('dblclick', function(){
        myFunc.remove()
     })
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 265, 185)
newItem('assets/staff.png', 600, 100)