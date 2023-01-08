import * as React from "react"
import { useRef, useEffect } from "react";
import "../styles/style.css"
import frameRenderer from "./framerender";

const AnimationCanvas = () => {
    const baseRadius = 2;
    const colors = ["#F1C40F", "#1ABC9C", "#3498DB", "#9B59B6", "#95A5A6"];
    const ballRef = useRef({ x: 50, y: 50, vx: 3.9, vy: 3.9, radius: baseRadius, color: colors[0] });
    const canvasRef = useRef(null);
    let size = {
        width: 0,
        height: 0
    }
    let mouseUp = true;

    // MOUSE HANDLING
    const handleMouseMove = (event) => {
        var x = event.clientX;
        var y = event.clientY;
        const ball = ballRef.current;
        ball.x = x;
        ball.y = y;
        tick();
    }

    const handleMouseDown = () => {
        mouseUp = false;
        requestAnimationFrame(increaseBall);
    }

    const handleMouseUp = () => {
        mouseUp = true;
        const ball = ballRef.current;
        console.log("current color: ", ball.color);
        ball.color = colors[Math.floor(Math.random() * 5)];
        console.log("new color: ", ball.color);
        resetBall();
    }

    // BALL ANIMATION
    const increaseBall = () => {
        const ball = ballRef.current;
        ball.radius += 4;
        if (!mouseUp) requestAnimationFrame(increaseBall);
    }

    const resetBall = () => {
        const ball = ballRef.current;
        // bounce animation
        if (ball.radius > baseRadius) {
            ball.radius -= (ball.radius / 6);
            requestAnimationFrame(resetBall);
        }
        else {
            ball.radius = baseRadius;
        }
    }

    // FRAME RENDERING
    const renderFrame = () => {
        const ctx = canvasRef.current.getContext("2d");
        // updateBall();
        frameRenderer.call(ctx, size, ballRef.current);
      };    

    const tick = () => {
        if (!canvasRef.current) return;
        renderFrame();
        requestAnimationFrame(tick);
    };

    // ON MOUNT
    useEffect(() => {
        size.width = window.innerWidth;
        size.height = window.innerHeight;
        canvasRef.current.width = size.width;
        canvasRef.current.height = size.height;
        function handleResize() {    
            canvasRef.current.width = size.width;
            canvasRef.current.height = size.height;
        }
        // requestIdRef.current = requestAnimationFrame(tick);
        window.addEventListener("resize", () => handleResize());
        return () => {
        //   cancelAnimationFrame(requestIdRef.current);
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return <canvas
        className="canvas"
        width={size.width}
        height={size.width}
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
    />;
}

export default AnimationCanvas;
