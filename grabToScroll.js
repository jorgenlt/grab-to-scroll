let mouseOverDiv = false;

// dragging the whole page
let isDragging = false;
let startPosition;
let startScrollTop;

document.addEventListener('mousedown', event => {
    if(!mouseOverDiv) {
        isDragging = true;
        startPosition = {
            x: event.clientX,
            y: event.clientY
        };
        startScrollTop = document.documentElement.scrollTop;
    };
});

document.addEventListener('mousemove', event => {
    if(!mouseOverDiv && isDragging) {
        const distanceY = event.clientY - startPosition.y;
        document.documentElement.scrollTop = startScrollTop - distanceY;
    };
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    isDraggingDiv = false;
});


// dragging inside all divs

const divs = document.querySelectorAll('.div');
let isDraggingDiv = false;
let startPositionDiv;
let startScrollLeftDiv = [];
let startScrollTopDiv = [];

divs.forEach((div) => {
    startScrollLeftDiv.push(0);
    startScrollTopDiv.push(0);
    
    div.addEventListener('mouseover', () => mouseOverDiv = true);
    
    div.addEventListener("mouseleave", () => mouseOverDiv = false);
    
    div.addEventListener('mousedown', event => {
        if(mouseOverDiv) {
            isDraggingDiv = true;
            startPositionDiv = {
                x: event.clientX,
                y: event.clientY
            };
            startScrollLeftDiv = div.scrollLeft;
            startScrollTopDiv = div.scrollTop;
        };
    });
    
    div.addEventListener('mousemove', event => {
        if(mouseOverDiv && isDraggingDiv) {
            const distanceX = event.clientX - startPositionDiv.x;
            const distanceY = event.clientY - startPositionDiv.y;
            div.scrollLeft = startScrollLeftDiv - distanceX;
            div.scrollTop = startScrollTopDiv - distanceY;
        };
    });
    
    div.addEventListener('mouseup', () => isDraggingDiv = false);
});
