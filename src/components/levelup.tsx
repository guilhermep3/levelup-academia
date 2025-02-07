type props = {
   textSize: string;
}
export const LevelUp = ({textSize}: props) => {

   return (
      <p className={`text-[--second-color] font-bold ${textSize}`}>LEVEL<span className="text-[--main-color]">UP</span></p>
   )
}