import React from 'react'
import { ModelViewerElement } from '@google/model-viewer'




const NFTCard = ({ nft }) => {
    
    return (
        <div>
            <div class = "glow-on-hover" type = "button" id="card">
            
            {nft.meta.name}
            
            </div>
            <ModelViewer />    
            
            
        </div>

        
    )
}

export default NFTCard
