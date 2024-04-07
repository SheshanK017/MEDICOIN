import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {

  const router=useRouter();
  const handle=()=>{
    router.push("/ddd/Campaign");
  }
  return (
    <>
         <div className="relative">
        <div className="absolute top-0 right-5 mt-4 mr-4 flex gap-6">
          <a href="/about" className="text-blueSecondary font-semibold hover:underline  font-aldrich text-xl hover:text-rishabh">ABOUT</a>
          <a href="/contact" className="text-blueSecondary font-semibold hover:underline  font-aldrich text-xl hover:text-rishabh">CONTACT US</a>
        </div>

        
      <div className="flex flex-col gap-10 justify-center items-center pt-[33.78378378378378vh]">
        <div className="flex flex-row gap-5">
        <div style={{width:"100px", height:"100px"}} className="mt-10px">
        <img src="../../assets/images/coins.png"/>
        </div>
        <div className="text-[200px] font-bold font-shes text-blueSecondary hover:text-rishabh">MEDICOIN</div>
        <div style={{width:"100px", height:"100px"}}>
        <img src="../../assets/images/coins.png"/>
        </div>
        </div>
        
       
        
    
    <div className="flex flex-row gap-10">
      <Link href="/Campaign">
      <button className="bg-none text-blueSecondary border border-blueSecondary px-4 py-2 rounded-2xl hover:bg-blue hover:text-rishabh  hover:border-rishabh transition duration-300  font-bold font-aldrich text-xl">FUND A CAMPAIGN</button>
      </Link>
    
    <button className="bg-none text-blueSecondary border border-blueSecondary px-4 py-2 rounded-2xl hover:bg-blue hover:text-rishabh hover:border-rishabh transition duration-300  font-bold font-aldrich text-xl"  >FUND A  RESEARCH CAMPAIGN</button>
    <button className="bg-none text-blueSecondary border border-blueSecondary px-4 py-2 rounded-2xl hover:bg-blue hover:text-rishabh hover:border-rishabh transition duration-300  font-bold font-aldrich text-xl"  >CREATE A CAMPAIGN</button>
    </div>
    
    </div>
    </div>
   
    </>

  )
}

export default Home


 {/* <div style={{height:"200px" ,width:"200px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ isolation: 'isolate',fill: 'blue' }} viewBox="0 0 64 80" x="0px" y="0px"  >
          <defs>
            <clipPath id="a">
              <rect width="64" height="64"/>
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <path d="M 51.145 5.002 C 50.734 5.021 50.377 5.291 50.245 5.681 C 49.716 7.269 49.271 8.16 48.288 9.142 C 47.9 9.532 47.9 10.162 48.288 10.553 C 49.271 11.535 49.716 12.428 50.245 14.015 C 50.382 14.423 50.764 14.698 51.193 14.698 C 51.623 14.698 52.005 14.423 52.142 14.015 C 52.671 12.428 53.116 11.535 54.099 10.553 C 54.486 10.162 54.486 9.532 54.099 9.142 C 53.116 8.16 52.671 7.269 52.142 5.681 C 51.999 5.258 51.592 4.98 51.145 5.002 Z  M 51.19 7.963 C 51.506 8.609 51.816 9.29 52.282 9.851 C 51.817 10.412 51.506 11.097 51.19 11.742 C 50.876 11.098 50.569 10.411 50.104 9.851 C 50.57 9.291 50.875 8.607 51.19 7.963 Z  M 13.585 13.668 C 13.176 13.69 12.823 13.96 12.692 14.347 C 11.957 16.554 11.297 17.86 9.901 19.256 C 9.514 19.646 9.514 20.276 9.901 20.666 C 11.297 22.061 11.957 23.369 12.692 25.576 C 12.829 25.984 13.211 26.258 13.641 26.258 C 14.07 26.258 14.452 25.984 14.589 25.576 C 15.324 23.369 15.977 22.061 17.372 20.666 C 17.76 20.276 17.76 19.646 17.372 19.256 C 15.977 17.86 15.324 16.554 14.589 14.347 C 14.445 13.921 14.034 13.643 13.585 13.668 L 13.585 13.668 Z  M 37.784 14.642 C 30.865 14.642 25.235 20.272 25.235 27.191 C 25.235 34.11 30.865 39.742 37.784 39.742 C 44.703 39.742 50.333 34.11 50.333 27.191 C 50.333 20.272 44.703 14.642 37.784 14.642 Z  M 13.638 16.637 C 14.155 17.821 14.7 18.991 15.55 19.965 C 14.702 20.937 14.154 22.104 13.638 23.287 C 13.121 22.105 12.573 20.936 11.726 19.965 C 12.575 18.992 13.12 17.82 13.638 16.637 Z  M 37.784 16.637 C 43.622 16.637 48.333 21.353 48.333 27.191 C 48.333 33.029 43.622 37.742 37.784 37.742 C 31.946 37.742 27.228 33.029 27.228 27.191 C 27.228 21.353 31.946 16.637 37.784 16.637 Z  M 37.802 18.504 C 36.955 18.506 36.117 18.632 35.312 18.873 C 33.164 19.514 31.26 20.975 30.114 23.096 C 29.937 23.411 29.945 23.798 30.134 24.107 C 30.322 24.416 30.663 24.598 31.025 24.585 C 31.387 24.571 31.713 24.363 31.878 24.041 C 33.655 20.751 37.727 19.539 41.017 21.316 C 41.332 21.492 41.718 21.484 42.026 21.296 C 42.334 21.108 42.517 20.769 42.506 20.408 C 42.494 20.047 42.289 19.72 41.97 19.553 C 40.645 18.837 39.213 18.499 37.802 18.504 L 37.802 18.504 Z  M 30.151 27.494 C 29.849 27.487 29.56 27.618 29.365 27.849 C 29.17 28.08 29.09 28.387 29.147 28.683 C 29.551 31.046" fill="rgb(0,0,0)"/></g></svg>

        </div> */}
