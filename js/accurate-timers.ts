// this is a implementation for `setInterval`
export function setInterval(func: () => void, millis: number ): number | null {
    let running, lastFrame = +new Date;
    let animReq: number | null = null;
    function loop(now) {
        // stop the loop if render returned false
        if ( running !== false ) {
            animReq = requestAnimationFrame( loop );
            const deltaT = now - lastFrame;
            // do not render frame when deltaT is too high
            if ( deltaT > millis ) {
                func();
            }
            lastFrame = now;
        }
    }
    loop(lastFrame);
    return animReq;
}


export function clearInterval(id: number) {
    cancelAnimationFrame(id);
}
