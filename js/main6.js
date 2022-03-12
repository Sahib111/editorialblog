var poststyle = 'grid';
			if(poststyle=='list'||poststyle=='List'||poststyle=='LIST'){
				$('body').addClass('list-post');                
			}
			else if(poststyle=='grid'||poststyle=='Grid'||poststyle=='GRID'){
				$('body').addClass('grid-post');                
			}	
			else if(poststyle=='simple'||poststyle=='Simple'||poststyle=='SIMPLE'){
				$('body').addClass('simple-post');                
			}	
			else{
				$('body').addClass('simple-post');                
			}
