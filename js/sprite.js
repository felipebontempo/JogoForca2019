function createSprite(selector) {
    
    let el = selector;

    let frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    let current = 0;
    let last = frames.length -1;

    el.classList.add(frames[current])
    
    function nextFrame() {
        el.classList.remove(frames[current])
        el.classList.add(frames[++current])
        console.log(el);
    }
    nextFrame()
}