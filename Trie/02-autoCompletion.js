class TrieNode {
    constructor() {
      this.children = {}; // Each child represents a character
      this.isEndOfWord = false; // True if node represents the end of a word
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    // Method to insert a word into the Trie
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
  
    // Helper method to find the node at the end of a prefix
    _searchNode(prefix) {
      let node = this.root;
      for (const char of prefix) {
        if (!node.children[char]) {
          return null; // If the prefix is not present, return null
        }
        node = node.children[char];
      }
      return node; // Return the node where the prefix ends
    }
  
    // Get all words that start with the given prefix
    getAutoComplete(prefix) {
      const results = [];
      const node = this._searchNode(prefix);
  
      if (node) {
        this._collectWords(node, prefix, results);
      }
      return results;
    }
  
    // Helper method to collect words from a given node
    _collectWords(node, prefix, results) {
      if (node.isEndOfWord) {
        results.push(prefix); // Add the word to the results if it's a valid word
      }
  
      for (const char in node.children) {
        this._collectWords(node.children[char], prefix + char, results);
      }
    }
  }
  const trie = new Trie();

  // Insert some words into the Trie
  trie.insert("apple");
  trie.insert("app");
  trie.insert("apply");
  trie.insert("banana");
  trie.insert("band");
  trie.insert("bandana");
  trie.insert("bat");
  
  // Get auto-complete suggestions
  console.log(trie.getAutoComplete("app")); // Output: ["app", "apple", "apply"]
  console.log(trie.getAutoComplete("ban")); // Output: ["banana", "band", "bandana"]
  console.log(trie.getAutoComplete("bat")); // Output: ["bat"]
  console.log(trie.getAutoComplete("cat")); // Output: []
    