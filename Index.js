//PROBLEM 1******.There is a queue where people get their tasks assigned called Task Queue. In this queue, the same person can be repeated multiple times. The queue has a current index value, essentially the index of the queue member who will get the next task. The member of the current index is called the Current Index Member. If a queue member becomes inactive, it is removed from the queue. As members are removed, the queue changes. You need to find the index of the Current Index Member in the newly changed queue.

// ******description of the solution : I use Java Script for solving the problem , In this problem we need to find out the current active index,essentially the index of the queue member who will get the next task.Its mean that which active person get the next task as fast as possible.In this question old task queue , current index member of old task queue and new task queue, and we need to find out the current index member in new task queue. 
//    I think that only the new task queue will be needed for this problem, I use map data structure , and iterate over the new task queue, if the map dose not have the current value of the new task queue then map store the value as a key value pairs (ex : 'A':1), If current index value of the new task queue is already present in map , then it only return the Index number of the current Index value and end the for loop.

function taskQueue(oldTask,curInd_oldTask,newTask){
    let map = new Map();
    for(let i=0;i<newTask.length;i++){
        if(!map.has(newTask[i])){
            map.set(newTask[i],1)
        }
        else{
            return `index of the Current Index Member in the New Task Queue is :${i+1}`
        }
    }
}
console.log(taskQueue(['A' ,'B' ,'C', 'D' ,'E', 'F' ,'A', 'B' ,'C' ,'D' ,'A', 'B', 'C', 'A' ,'B', 'A'],7,[ 'B', 'C', 'E', 'F',  'B' ,'C','B', 'C' ,'B']))