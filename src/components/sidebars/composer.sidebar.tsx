import { useMemo } from "react";

import FolderTree, { testData } from 'react-folder-tree';

const SideBar = ({ }) => {
    const onTreeStateChange = (state, event) => console.log(state, event);

  return (
    <div className="flex flex-col justify-between items-center w-full h-full max-h-full  text-gray-400 border-r-2 border-gray-800 shadow-xl  bg-black shadow-xl ">
     <FolderTree
      data={ testData }
      onChange={ onTreeStateChange }
    />
    </div>
  );
};


export default SideBar;