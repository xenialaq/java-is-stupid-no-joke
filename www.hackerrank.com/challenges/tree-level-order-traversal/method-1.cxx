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

    void levelOrder(Node * root) {
      queue < Node * > frontier;
      if (root == NULL) {
        return;
      }
      cout << root -> data;
      if (root -> left != NULL) {
        frontier.push(root -> left);
      }
      if (root -> right != NULL) {
        frontier.push(root -> right);
      }
      while (!frontier.empty()) {
        Node * n = frontier.front();
        if (n -> left != NULL) {
          frontier.push(n -> left);
        }
        if (n -> right != NULL) {
          frontier.push(n -> right);
        }
        frontier.pop();
        cout << " " << n -> data;
      }

    }

};
