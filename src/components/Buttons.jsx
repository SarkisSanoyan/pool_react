


export function Buttons({ addWater, removeWater }) {

    return (
        <div className=" flex justify-between items-center">
            <button className=" bg-blue-700 text-white text-center p-1 m-1 border-4" onClick={addWater}>ADD WATER</button>
            <button className=" bg-blue-700 text-white text-center p-1 m-1 border-4" onClick={removeWater}>REMOVE WATER</button>
        </div>
    )
}
