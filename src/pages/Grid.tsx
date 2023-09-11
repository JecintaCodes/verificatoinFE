import React from "react"
interface iProps{
  color?: string
  title?: string
}

const Box:React.FC<iProps> =({color, title})=>{
  return <div style={{backgroundColor: `${color}`}}>{title}</div>
}
const Grid= () => {
  return (
    <div>
      <div>Start Here</div>

      <div className="boxHolder">
        <div className="myBoxHolder">
       <Box color="red" title="Box 1"/>
       <Box color="dodgerblue" title="Box 2"/>
       <Box color="orange" title="Box 3"/>
       <Box color="pink" title="Box 4"/>
       <Box color="green" title="Box 5"/>
       <Box color="purple" title="Box 6"/>
       <Box color="gray" title="Box 7"/>
       <Box color="lightblue" title="Box 8"/>
       <Box color="yellow" title="Box 9"/>
       <Box color="brown" title="Box 10"/>
        </div>
      </div>
    </div>
  )
}

export default Grid


// .boxHolder{
//     width: 100%;
//   height:95vh;
//   display: grid;
//   align-content: center;
//   justify-content: center;
//   }
//   .myBoxHolder{
//     width: 700px;
//     height: 500px;
//     border-radius: 5px;
//     border: 1px solid silver;
//     overflow: hidden;
//     display: grid;
//     grid-template-columns: 100px 100px;
//     /* grid-template-rows: 100px  ; */
//   }