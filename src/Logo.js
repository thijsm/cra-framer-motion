import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

function Logo(props) {
    const [scopeOval1, animateOval1] = useAnimate();
    const [scopeOval2, animateOval2] = useAnimate();
    const [scopeOval3, animateOval3] = useAnimate();

    const colors = {
        reactBlue: "#61DAFB",
        motionMagenta: "#f08",
        motionBlue: "#40f",
        motionPurple: "#70f"
    };

    function sequence(scope, animate, delay = 0) {
        animate([
            [
                scope.current,
                {
                    pathLength: 0.05,
                    pathOffset: 1,
                    pathSpacing: 0.95
                },
                {
                    delay: delay, // This first animation can have a delay
                    duration: 1,
                    ease: "easeIn"
                }
            ],
            [
                scope.current,
                { pathOffset: [0, 1] },
                { duration: 0.5, ease: "linear" }
            ],
            [
                scope.current,
                { pathOffset: [0, 1] },
                { duration: 0.5, ease: "linear" }
            ],
            [
                scope.current,
                {
                    pathOffset: [0, 0],
                    pathSpacing: [1, 1],
                    pathLength: [0.05, 1]
                },
                { duration: 1.5, ease: "easeOut" }
            ]
        ]);
        animate(
            scope.current,
            { stroke: "url(#motionGradientAnimated)" },
            { delay: delay + 1.5 }
        );
    }

    // Triggering each oval’s animation sequence
    // after the component has mounted
    useEffect(() => {
        sequence(scopeOval1, animateOval1, 2);
        sequence(scopeOval2, animateOval2, 2.5);
        sequence(scopeOval3, animateOval3, 3);
    }, []);

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 841 595"
            {...props}
        >
            <defs>
                <linearGradient id="initialColor">
                    <stop offset="0%" stopColor={colors.reactBlue} />
                    <stop offset="100%" stopColor={colors.reactBlue} />
                </linearGradient>
                <linearGradient id="motionGradientAnimated">
                    {/* This gradient’s <stop>s are animated */}
                    <motion.stop
                        offset="5%"
                        animate={{
                            stopColor: [
                                colors.motionBlue,
                                colors.motionMagenta,
                                colors.motionPurple
                            ]
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear",
                            duration: 8
                        }}
                    />
                    <motion.stop
                        offset="50%"
                        animate={{
                            stopColor: [
                                colors.motionMagenta,
                                colors.motionPurple,
                                colors.motionBlue
                            ]
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear",
                            duration: 8
                        }}
                    />
                    <motion.stop
                        offset="95%"
                        animate={{
                            stopColor: [
                                colors.motionPurple,
                                colors.motionBlue,
                                colors.motionMagenta
                            ]
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear",
                            duration: 8
                        }}
                    />
                </linearGradient>
            </defs>

            <motion.path
                d="M 538.429 94.524 C 581.86 119.563 564.798 230.268 500.319 341.79 C 435.839 453.312 348.36 523.419 304.929 498.38 C 261.497 473.341 278.56 362.636 343.039 251.114 C 407.518 139.592 494.997 69.484 538.429 94.524 Z"
                initial={{
                    stroke: "url(#initialColor)",
                    pathLength: 1,
                    pathOffset: 0,
                    pathSpacing: 1
                }}
                ref={scopeOval1}
            />
            <motion.path
                d="M 304.929 94.524 C 348.36 69.484 435.839 139.592 500.319 251.114 C 564.798 362.636 581.86 473.341 538.429 498.38 C 494.997 523.419 407.518 453.312 343.039 341.79 C 278.56 230.268 261.497 119.563 304.929 94.524 Z"
                initial={{
                    stroke: "url(#initialColor)",
                    pathLength: 1,
                    pathOffset: 0,
                    pathSpacing: 1
                }}
                ref={scopeOval2}
            />
            <motion.path
                d="M 188.152 296.761 C 188.152 246.682 292.693 206.085 421.652 206.085 C 550.61 206.085 655.152 246.682 655.152 296.761 C 655.152 346.839 550.61 387.436 421.652 387.436 C 292.693 387.436 188.152 346.839 188.152 296.761 Z"
                initial={{
                    stroke: "url(#initialColor)",
                    pathLength: 1,
                    pathOffset: 0,
                    pathSpacing: 1
                }}
                ref={scopeOval3}
            />

            <motion.circle
                r="46"
                cx="422"
                cy="297"
                fill="url(#motionGradientAnimated)"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
            />

            {/* This blue circle simply fades out */}
            <motion.circle
                r="46"
                cx="422"
                cy="297"
                fill={colors.reactBlue}
                initial={{ fillOpacity: 1 }}
                animate={{ fillOpacity: 0 }}
                transition={{ delay: 3, duration: 2 }}
            />
        </motion.svg>
    );
}

export default Logo;
