class TrieNode {
    constructor() {
      this.children = {};//Object to store children nodes (characters)
      this.isEndOfWord = false; // Marks the end of a word
    }
  }
  

class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    // Insert a word into the Trie
    insert(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    // Search for a word in the Trie
    search(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.isEndOfWord;
    }
  
    // Check if there is any word that starts with the given prefix
    startsWith(prefix) {
      let node = this.root;
      for (const char of prefix) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return true;
    }
  
    // Print all words stored in the Trie
    print() {
      const words = []; // Array to store words
      this._dfs(this.root, "", words);
      console.log("Words in Trie:", words.join(", "));
    }
  
    // Helper function for depth-first traversal
    _dfs(node, prefix, words) {
      if (node.isEndOfWord) {
        words.push(prefix); // Add word to list when at end of a word
      }
      for (const char in node.children) {
        this._dfs(node.children[char], prefix + char, words);
      }
    }
  }

  const trie = new Trie();

// Inserting words
trie.insert("apple");
trie.insert("app");
trie.insert("bat");
trie.insert("batman");

// Printing all words in the Trie
trie.print();
// Output: Words in Trie: apple, app, bat, batman
console.log(trie.startsWith("ap"));

console.log(trie.startsWith("c"));

  