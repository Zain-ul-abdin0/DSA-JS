class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    // this.table[index] = value
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameItemKey = bucket.find((item) => item[0] === key);
      if (sameItemKey) {
        sameItemKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key) {
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];
    if (bucket) {
      const sameItemKey = bucket.find((item) => item[0] == key);
      if (sameItemKey) {
        return sameItemKey[1];
      }
    }
    return undefined;
  }
  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;
    const bucket = this.table[index];
    if(bucket){
        const sameItemKey = bucket.find(item => item[0] === key);
        if(sameItemKey){
            bucket.splice(bucket.indexOf(sameItemKey),1)
        }
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

let hash = new HashTable(50);

hash.set("name", "zain-ul-abidn");
hash.set("name", "zain-ul-abidn");
hash.display();
