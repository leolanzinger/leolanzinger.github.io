import * as React from "react"
import { useRef, useEffect } from "react";
import "../styles/style.css"
import frameRenderer from "./framerender";

const AnimationCanvas = () => {
    // onboarding animation variable
    let onboarding = true;
    let bounces = 0;
    let canvasIsAnimated = false;
    // canvas variables
    let size = {
        width: 0,
        height: 0
    }
    let mouseUp = true;
    // ball variables
    const baseRadius = 2;
    const colors = ["#F1C40F", "#1ABC9C", "#3498DB", "#9B59B6", "#95A5A6"];
    // refs
    const ballRef = useRef({ x: 50, y: 50, vx: 3.9, vy: 3.9, radius: baseRadius, color: colors[0] });
    const canvasRef = useRef(null);
    const requestIdRef = useRef(null);
    const intervalRef = useRef(null);

    // MOUSE HANDLING
    const handleMouseMove = (event) => {
        var x = event.clientX;
        var y = event.clientY;
        const ball = ballRef.current;
        ball.x = x;
        ball.y = y;
        if (onboarding) {
            requestIdRef.current = requestAnimationFrame(animateOnboarding);
        }
        tick();
    }
    const handleMouseDown = () => {
        mouseUp = false;
        onboarding = false;
        requestIdRef.current = requestAnimationFrame(increaseBall);
    }
    const handleMouseUp = () => {
        mouseUp = true;
        const ball = ballRef.current;
        ball.color = randomColor();
        resetBall();
    }

    // BALL ANIMATION
    const increaseBall = () => {
        const ball = ballRef.current;
        ball.radius += 4;
        if (ball.radius > 10) canvasIsAnimated = true;
        if (!mouseUp) requestIdRef.current = requestAnimationFrame(increaseBall);
    }
    const resetBall = () => {
        const ball = ballRef.current;
        // bounce animation
        if (ball.radius > baseRadius) {
            ball.radius -= (ball.radius / 6);
            requestIdRef.current = requestAnimationFrame(resetBall);
        }
        else {
            ball.radius = baseRadius;
        }
    }
    const inflateBall = () => {
        const ball = ballRef.current;
        if (ball.radius < 20) {
            ball.radius += 4;
            requestIdRef.current = requestAnimationFrame(inflateBall);
            tick();
        }
        else {
            requestIdRef.current = requestAnimationFrame(deflateBall);
            tick();
        }
    }
    const deflateBall = () => {
        const ball = ballRef.current;
        if (ball.radius > baseRadius) {
            ball.radius -= 4;
            requestIdRef.current = requestAnimationFrame(deflateBall);
            tick();
        }
        else {
            ball.radius = baseRadius;
            if (bounces < 2) {
                bounces++;
                requestIdRef.current = requestAnimationFrame(inflateBall);
            }
            else {
                ball.color = randomColor();
            }
            tick();
        }
    }
    const animateOnboarding = () => {
        onboarding = false;
        bounces = 0;
        intervalRef.current = setInterval(function() {
            if (!canvasIsAnimated) {
                bounces = 0;
                requestIdRef.current = requestAnimationFrame(inflateBall);
            }
            else {
                clearInterval(intervalRef.current);
            }
        }, 3600);
    }
    const randomColor = () => {
        return colors[Math.floor(Math.random() * 5)];
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
        requestIdRef.current = requestAnimationFrame(tick);
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
        window.addEventListener("resize", () => handleResize());
        return () => {
        cancelAnimationFrame(requestIdRef.current);
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
