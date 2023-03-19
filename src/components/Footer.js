import React from 'react'

function Footer(props) {
  return (
<footer className={`footer text-bg-${props.mode} p-2`}>
    <span>Created By: TheLostCoder! Thanks to CodeWithHarry</span>
    {/* <div className="footer text-center py-2">Created By: TheLostCoder! Thanks to CodeWithHarry
    </div> */}
</footer>
  )
}

export default Footer
