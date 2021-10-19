#include <bits/stdc++.h>

using namespace std;

class Node {
  public:
    int data;
  Node * left;
  Node * right;
  Node(int d) {
    data = d;
    left = NULL;
    right = NULL;
  }
};

class Solution {
  public:
    Node * insert(Node * root, int data) {
      if (root == NULL) {
        return new Node(data);
      } else {
        Node * cur;
        if (data <= root -> data) {
          cur = insert(root -> left, data);
          root -> left = cur;
        } else {
          cur = insert(root -> right, data);
          root -> right = cur;
        }

        return root;
      }
    }
  
  /*The tree node has data, left child and right child 
    class Node {
        int data;
        Node* left;
        Node* right;
    };
  */

  int recursiveHeight(Node * node, int h) {
    if (node == NULL) {
      return h;
    }
    return max(
      recursiveHeight(node -> left, h + 1),
      recursiveHeight(node -> right, h + 1)
    );
  }

  int height(Node * root) {
    return max(
      recursiveHeight(root -> left, 0),
      recursiveHeight(root -> right, 0)
    );
  }

};
