interface IconButtonProps {
    cmd:string;
    iconSrc:string
}

const IconButton = (props:IconButtonProps) => {

    return (
        <button
            style={{textAlign:'center', margin:'auto', background:'none', userSelect:'none'}}
            onClick={()=>{window.electron.ipcRenderer.sendMessage('remote', [props.cmd])}}
          >
            <img width="24" alt="icon" id='cover' src={props.iconSrc} />
          </button>
    )

}

export default IconButton