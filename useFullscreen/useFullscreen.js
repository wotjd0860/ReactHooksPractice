export const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = (isFull) => {
      if (callback && typeof callback === "function") {
        callback(isFull);
      }
    };
    const triggerFull = () => {
      if (element.current) {
        if (element.current.requestFullscreen) {
          element.current.requestFullscreen();
        } else if (element.current.mozRequestFullscreen) {
          element.current.mozRequestFullscreen();
        } else if (element.current.webkitRequestFullscreen) {
          element.current.webkitRequestFullscreen();
        } else if (element.current.msRequestFullscreen) {
          element.current.msRequestFullscreen();
        }
      }
      runCb(true);
    };
    const exitFull = () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullscreen) {
        document.mozCancelFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (documentt.msExitFullscreen) {
        documentt.msExitFullscreen();
      }
      runCb(false);
    };
    return { element, triggerFull, exitFull };
  };