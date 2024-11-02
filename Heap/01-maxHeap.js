class Heap{
    constructor(){
        this.data=[]
    }


    getParentIndex(i){
        return Math.floor((i-1)/2)
    }

    getLeftChildIndex(i){
        return i*2+1
    }

    getRightChildIndex(i){
        return i*2+2
    }

    swap(i1,i2){
        const temp=this.data[i1]
        this.data[i1]=this.data[i2]
        this.data[i2]=temp
    }

// addd elements to heap
    push(key){
        this.data[this.data.length]=key
        this.heapifyUp()
    }

    heapifyUp(){
        let currInd=this.data.length-1

        while(this.data[currInd]>this.data[this.getParentIndex(currInd)]){
            this.swap(currInd,this.getParentIndex(currInd))

            currInd=this.getParentIndex(currInd)
        }
    }

    poll(){
        const maxValue=this.data[0]
        this.data[0]=this.data[this.data.length-1]
        this.data.length--
        this.heapifyDown();

        return maxValue
    }

    heapifyDown(){
        let currInd=0

        while(this.data[this.getLeftChildIndex(currInd)] !== undefined){
            let bigChildInd=this.getLeftChildIndex(currInd);

            if(this.data[this.getRightChildIndex(currInd)] !== undefined && this.data[this.getRightChildIndex(currInd)] > this.data[this.getLeftChildIndex(currInd)] ) {
                bigChildInd=this.getRightChildIndex(currInd)
            }

            if(this.data[currInd] <this.data[bigChildInd]){
                this.swap(currInd,bigChildInd)
                currInd=bigChildInd;
            }else{
                return;
            }
        }
    }
    
}


const heap=new Heap()
console.log(heap);

heap.push(25)
heap.push(5)
heap.push(40)
heap.push(70)
heap.push(90)
heap.push(44)

console.log(heap.data.join(","));

let arr=[]

arr.push(heap.poll())
arr.push(heap.poll())
arr.push(heap.poll())
arr.push(heap.poll())
arr.push(heap.poll())
console.log(arr);


