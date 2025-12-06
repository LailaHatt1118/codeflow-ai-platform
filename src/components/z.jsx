<div className="relative overflow-hidden w-88 "> {/* flex-grow */}
    <SyntaxHighlighter language="javascript" 
      className= "lg:h- lg:w-12 sm:h-300 sm:w-72 rounded-md text-sm"
      style={nightOwl}
    //   customStyle={{
        // marginRight: '10px',
        // borderRadius: '8px',
        // fontSize:"11px",
        // width:'365px',
        // height :'100px',
        // border:'1px solid #3c3c3c',
        //    '@media screen (max-width: 1024px)': {
            //  height: 'auto',
            //  width:'auto', 
            //  padding: 0, 
        //    }
    //   }}
      >
    
        {CodeExamples[activeTab]}
    </SyntaxHighlighter>
</div>