var inp1 = [
  [
    {
      type: 3,
      x: 0,
      y: 0,
      ends: [2, 3],
      status: 0,
    },
    {
      type: 2,
      x: 1,
      y: 0,
      ends: [1],
      status: 0,
    },
    {
      type: 2,
      x: 2,
      y: 0,
      ends: [0],
      status: 0,
    },
    {
      type: 2,
      x: 3,
      y: 0,
      ends: [3],
      status: 0,
    },
    {
      type: 3,
      x: 4,
      y: 0,
      ends: [2, 3],
      status: 0,
    }
  ],
  [
    {
      type: 5,
      x: 0,
      y: 1,
      ends: [1, 2, 3],
      status: 0,
    },
    {
      type: 4,
      x: 1,
      y: 1,
      ends: [1, 3],
      status: 0,
    },
    {
      type: 5,
      x: 2,
      y: 1,
      ends: [1, 2, 3],
      status: 0,
    },
    {
      type: 5,
      x: 3,
      y: 1,
      ends: [3, 0, 1],
      status: 0,
    },
    {
      type: 5,
      x: 4,
      y: 1,
      ends: [2, 3, 0],
      status: 0,
    }
  ],
  [
    {
      type: 4,
      x: 0,
      y: 2,
      ends: [0, 2],
      status: 0,
    },
    {
      type: 3,
      x: 1,
      y: 2,
      ends: [1, 2],
      status: 0,
    },
    {
      type: 2,
      x: 2,
      y: 2,
      ends: [0],
      status: 0,
    },
    {
      type: 4,
      x: 3,
      y: 2,
      ends: [0, 2],
      status: 0,
    },
    {
      type: 2,
      x: 4,
      y: 2,
      ends: [3],
      status: 0,
    }
  ],
  [
    {
      type: 5,
      x: 0,
      y: 3,
      ends: [0, 1, 2],
      status: 0,
    },
    {
      type: 1,
      x: 1,
      y: 3,
      ends: [1, 2, 3],
      status: 0,
    },
    {
      type: 3,
      x: 2,
      y: 3,
      ends: [0, 1],
      status: 0,
    },
    {
      type: 2,
      x: 3,
      y: 3,
      ends: [3],
      status: 0,
    },
    {
      type: 2,
      x: 4,
      y: 3,
      ends: [3],
      status: 0,
    }
  ],
  [
    {
      type: 3,
      x: 0,
      y: 4,
      ends: [1, 2],
      status: 0,
    },
    {
      type: 2,
      x: 1,
      y: 4,
      ends: [1],
      status: 0,
    },
    {
      type: 3,
      x: 2,
      y: 4,
      ends: [1, 2],
      status: 0,
    },
    {
      type: 4,
      x: 3,
      y: 4,
      ends: [0, 2],
      status: 0,
    },
    {
      type: 3,
      x: 4,
      y: 4,
      ends: [3, 0],
      status: 0,
    }
  ]
];

var inp2 = [
  [
    {
      type: 3,
      x: 0,
      y: 0,
      ends: [1, 2],
      status: 0,
    },
    {
      type: 2,
      x: 1,
      y: 0,
      ends: [3],
      status: 0,
    },
    {
      type: 2,
      x: 2,
      y: 0,
      ends: [0],
      status: 0,
    },
    {
      type: 2,
      x: 3,
      y: 0,
      ends: [1],
      status: 0,
    },
    {
      type: 3,
      x: 4,
      y: 0,
      ends: [2, 3],
      status: 0,
    }
  ],
  [
    {
      type: 5,
      x: 0,
      y: 1,
      ends: [0, 1, 2],
      status: 0,
    },
    {
      type: 4,
      x: 1,
      y: 1,
      ends: [1, 3],
      status: 0,
    },
    {
      type: 5,
      x: 2,
      y: 1,
      ends: [1, 2, 3],
      status: 0,
    },
    {
      type: 5,
      x: 3,
      y: 1,
      ends: [1, 2, 3],
      status: 0,
    },
    {
      type: 5,
      x: 4,
      y: 1,
      ends: [2, 3, 0],
      status: 0,
    }
  ],
  [
    {
      type: 4,
      x: 0,
      y: 2,
      ends: [0, 2],
      status: 0,
    },
    {
      type: 3,
      x: 1,
      y: 2,
      ends: [1, 2],
      status: 0,
    },
    {
      type: 2,
      x: 2,
      y: 2,
      ends: [0],
      status: 0,
    },
    {
      type: 4,
      x: 3,
      y: 2,
      ends: [0, 2],
      status: 0,
    },
    {
      type: 2,
      x: 4,
      y: 2,
      ends: [0],
      status: 0,
    }
  ],
  [
    {
      type: 5,
      x: 0,
      y: 3,
      ends: [0, 1, 2],
      status: 0,
    },
    {
      type: 1,
      x: 1,
      y: 3,
      ends: [3, 0, 1],
      status: 0,
    },
    {
      type: 3,
      x: 2,
      y: 3,
      ends: [2, 3],
      status: 0,
    },
    {
      type: 2,
      x: 3,
      y: 3,
      ends: [0],
      status: 0,
    },
    {
      type: 2,
      x: 4,
      y: 3,
      ends: [2],
      status: 0,
    }
  ],
  [
    {
      type: 3,
      x: 0,
      y: 4,
      ends: [0, 1],
      status: 0,
    },
    {
      type: 2,
      x: 1,
      y: 4,
      ends: [3],
      status: 0,
    },
    {
      type: 3,
      x: 2,
      y: 4,
      ends: [0, 1],
      status: 0,
    },
    {
      type: 4,
      x: 3,
      y: 4,
      ends: [1, 3],
      status: 0,
    },
    {
      type: 3,
      x: 4,
      y: 4,
      ends: [3, 0],
      status: 0,
    }
  ]
];

var start  = [1, 3];

function test(arr, start) {
  arr.forEach((el) => el.status = 0);
  let que = [];
  que.push(arr[start[1]][start[0]])

  while(que.length > 0) {
    let field = que.pop();
    arr[field.y][field.x].status = 1;

    let near; 
    if (field.x < 4) {
      near = (arr[field.y][field.x + 1]);
      if (near && field.ends.includes(1)) {
        if (near.ends.includes(3) && near.status === 0) {
          que.push(near);
        } 
      }
    }
    if (field.x > 0) {
      near = (arr[field.y][field.x - 1]) ? arr[field.y][field.x - 1] : null;
      if (near && field.ends.includes(3)) {
        if (near.ends.includes(1) && near.status === 0) {
          que.push(near);
        } 
      }
    }
    if (field.y < 4) {
      near = (arr[field.y + 1][field.x]) ? arr[field.y + 1][field.x] : null;
      if (near && field.ends.includes(2)) {
        if (near.ends.includes(0) && near.status === 0) {
          que.push(near);
        } 
      }
    }
    if (field.y > 0) {
      near = (arr[field.y - 1][field.x]) ? arr[field.y - 1][field.x] : null;
      if (near && field.ends.includes(0)) {
        if (near.ends.includes(2) && near.status === 0) {
          que.push(near);
        } 
      }  
    }
  }
  console.log(arr);
} 

test(inp2, start);