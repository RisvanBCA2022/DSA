/**
 * @param {TreeNode} root
 * @return {boolean}
 */

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function evaluateTree(root) {
    // Helper function to recursively evaluate the tree
    function evaluate(node) {
        // Base case: if the node is a leaf, return its boolean value
        if (node.left === null && node.right === null) {
            return node.val === 1;
        }
        
        // Recursive case: evaluate left and right children
        let leftValue = evaluate(node.left);
        let rightValue = evaluate(node.right);
        
        // Apply the operation based on node.val
        if (node.val === 2) { // OR operation
            return leftValue || rightValue;
        } else if (node.val === 3) { // AND operation
            return leftValue && rightValue;
        }
        
        // This should not happen as per problem constraints
        throw new Error("Invalid node value: " + node.val);
    }
    
    // Start evaluation from the root
    return evaluate(root);
}

// Example usage:
// Create the tree for the first example
let root = new TreeNode(2,
    new TreeNode(1),
    new TreeNode(3,
        new TreeNode(0),
        new TreeNode(1)
    )
);

console.log(evaluateTree([2,1,3,null,null,0,1]))
console.log(evaluateTree(0))

