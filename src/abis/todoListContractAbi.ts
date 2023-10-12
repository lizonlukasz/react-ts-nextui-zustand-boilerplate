export const todoListContractAbi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_task',
        type: 'string',
      },
    ],
    name: 'addTask',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
    ],
    name: 'getTodoList',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'task',
            type: 'string',
          },
          {
            internalType: 'bool',
            name: 'completed',
            type: 'bool',
          },
        ],
        internalType: 'struct TodoList.TodoItem[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_index',
        type: 'uint256',
      },
    ],
    name: 'markTaskCompleted',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
