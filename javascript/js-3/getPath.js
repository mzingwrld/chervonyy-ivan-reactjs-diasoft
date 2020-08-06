function getPath (node) {

	let handleParseDOMFromNode = (node) => {
        let path_;

        if (node.tagName) {
            path_ = node.tagName.toLowerCase();
        }
        // check if node have its id:
        if (node.id) {
            path_ += `#${node.id}`;
        }
        
        // check if node have its classname:
        if (node.classList.value !== "") {
            path_ += `[class='${node.classList.value}']`;
        }

        // check if element is child of parent
        if (node.parentNode.childElementCount) {
            let childArr = node.parentNode.children;

            for(let i = 0; i < childArr.length; i++) {
                if(childArr[i] === node) {
                    path_ += `:nth-child(${i + 1})`;
                }
            }   
        }
		return path_;
    };

    let path;

    if (!node.parentElement) { // very first element
        path = handleParseDOMFromNode(node);
    } else {
        path = handleParseDOMFromNode(node);
        while (node = node.parentElement) {
            path = `${handleParseDOMFromNode(node)} > ${path}`;
        }
    }

	return path;
}

module.exports = getPath;
