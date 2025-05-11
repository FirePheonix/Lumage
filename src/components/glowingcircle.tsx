const GlowingCircle = () => {
    return (
      <>
        <div className="circle-bg"></div>
  
        <style jsx global>{`
          .circle-bg {
            position: absolute;
            height: 16rem; /* 64 Tailwind units */
            width: 16rem;
            border-radius: 9999px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-image: radial-gradient(
                50% 50% at 16.8% 18.3%,
                white,
                rgb(184, 148, 255) 37.7%
              ),
              rgb(24, 0, 66);
            box-shadow: -20px -20px 50px rgba(255, 255, 255, 0.5),
              -20px -20px 80px rgba(255, 255, 255, 0.1),
              0 0 50px rgb(140, 69, 255);
          }
        `}</style>
      </>
    );
  };
  
  export default GlowingCircle;
  