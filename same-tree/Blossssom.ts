class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @psuedocode
 * 재귀함수(left, right)
 *  둘 다 값이 null : true
 *  한 쪽만 값이 없거나 값이 다름 : false
 *  재귀함수(left.left, right.right)
 *
 * @param p - TreeNode
 * @param q - TreeNode
 * @returns - 두 트리노드가 같은지?
 * @description
 * - 어떻게 접근해야지는 이제 빠르게 나올 수 있는데 디테일한 접근이 정리가 잘 안된다.
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  function recursive(
    target1: TreeNode | null,
    target2: TreeNode | null,
  ): boolean {
    if (!target1 && !target2) {
      return true;
    }

    if (!target1 || !target2 || target1.val !== target2.val) {
      return false;
    }

    return (
      recursive(target1.left, target2.left) &&
      recursive(target1.right, target2.right)
    );
  }

  return recursive(p, q);
}

const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));

isSameTree(p, q);
