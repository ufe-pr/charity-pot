//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BaseScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const baseScriptAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_SCRIPT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Deploy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const deployAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_SCRIPT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'run',
    outputs: [
      {
        name: 'scc',
        internalType: 'contract SunkCostCharity',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceID', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721Abi = [
  {
    type: 'function',
    inputs: [
      { name: '_approved', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_operator', internalType: 'address', type: 'address' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceID', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: '_approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_from',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: '_to', internalType: 'address', type: 'address', indexed: true },
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721EnumerableAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_approved', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_operator', internalType: 'address', type: 'address' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceID', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: '_approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_from',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: '_to', internalType: 'address', type: 'address', indexed: true },
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_approved', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '_name', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_operator', internalType: 'address', type: 'address' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceID', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '_symbol', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: '_operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: '_approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_from',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: '_to', internalType: 'address', type: 'address', indexed: true },
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721TokenReceiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721TokenReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_operator', internalType: 'address', type: 'address' },
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Script
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const scriptAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_SCRIPT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StdAssertions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdAssertionsAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StdInvariant
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdInvariantAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SunkCostCharity
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const sunkCostCharityAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_token', internalType: 'contract IERC20', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_roundId', internalType: 'uint256', type: 'uint256' }],
    name: 'buyRoundKey',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_roundId', internalType: 'uint256', type: 'uint256' }],
    name: 'claimFunds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_roundId', internalType: 'uint256', type: 'uint256' },
      { name: '_to', internalType: 'address', type: 'address' },
    ],
    name: 'claimFundsTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_name', internalType: 'bytes32', type: 'bytes32' },
      { name: '_initialPrice', internalType: 'uint128', type: 'uint128' },
      { name: '_duration', internalType: 'uint256', type: 'uint256' },
      { name: '_timerExtension', internalType: 'uint256', type: 'uint256' },
      { name: '_maxTimerDuration', internalType: 'uint256', type: 'uint256' },
      { name: '_priceExtension', internalType: 'uint128', type: 'uint128' },
      { name: '_charityWallet', internalType: 'address', type: 'address' },
      { name: '_promotionalImage', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createRound',
    outputs: [{ name: 'roundId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_roundId', internalType: 'uint256', type: 'uint256' }],
    name: 'distributeFunds',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_roundId', internalType: 'uint256', type: 'uint256' }],
    name: 'getRoundCurrentPrice',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'roundCounter',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_roundId', internalType: 'uint256', type: 'uint256' }],
    name: 'roundPoolSize',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_roundId', internalType: 'uint256', type: 'uint256' }],
    name: 'rounds',
    outputs: [
      { name: 'name', internalType: 'bytes32', type: 'bytes32' },
      { name: 'endTime', internalType: 'uint64', type: 'uint64' },
      { name: 'initialKeyPrice', internalType: 'uint128', type: 'uint128' },
      { name: 'priceIncrement', internalType: 'uint128', type: 'uint128' },
      { name: 'timerIncrement', internalType: 'uint32', type: 'uint32' },
      { name: 'maxTimerLength', internalType: 'uint32', type: 'uint32' },
      { name: 'keysBought', internalType: 'uint64', type: 'uint64' },
      { name: 'lastBuyer', internalType: 'address', type: 'address' },
      { name: 'charityWallet', internalType: 'address', type: 'address' },
      { name: 'promotionalImage', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'roundId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'buyer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'price',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'KeyPurchased',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SunkCostCharityTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const sunkCostCharityTestAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'setUp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_Round_BuyKey_Basic',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_Round_BuyKey_Checks',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_Round_BuyKey_TimerChecks',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_Round_Create_Effects',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_Round_Create_EnsureInitialValuesInRange',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_Round_Create_RoundProperties',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_Round_DistributeRewards',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'test_Round_PreventClaimBeforeDistribution',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [
      {
        name: 'excludedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [
      {
        name: 'excludedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [
      {
        name: 'excludedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [
      {
        name: 'targetedArtifacts_',
        internalType: 'string[]',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [
      {
        name: 'targetedContracts_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [
      {
        name: 'targetedSenders_',
        internalType: 'address[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'int256[]',
        type: 'int256[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'val',
        internalType: 'address[]',
        type: 'address[]',
        indexed: false,
      },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'decimals',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestDeploy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testDeployAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_SCRIPT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'run',
    outputs: [
      {
        name: 'scc',
        internalType: 'contract SunkCostCharity',
        type: 'address',
      },
      { name: 'token', internalType: 'contract MockERC20', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Vm
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vmAbi = [
  {
    type: 'function',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'accesses',
    outputs: [
      { name: 'readSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'writeSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'activeFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'addr',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'allowCheatcodes',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqAbs',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqAbs',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqAbs',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqAbs',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqAbsDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqAbsDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqAbsDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqAbsDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqRel',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqRel',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqRel',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqRel',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqRelDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqRelDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqRelDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqRelDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'right', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256[]', type: 'int256[]' },
      { name: 'right', internalType: 'int256[]', type: 'int256[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address', type: 'address' },
      { name: 'right', internalType: 'address', type: 'address' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string', type: 'string' },
      { name: 'right', internalType: 'string', type: 'string' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address[]', type: 'address[]' },
      { name: 'right', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address[]', type: 'address[]' },
      { name: 'right', internalType: 'address[]', type: 'address[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool', type: 'bool' },
      { name: 'right', internalType: 'bool', type: 'bool' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address', type: 'address' },
      { name: 'right', internalType: 'address', type: 'address' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'right', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool[]', type: 'bool[]' },
      { name: 'right', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256[]', type: 'int256[]' },
      { name: 'right', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32', type: 'bytes32' },
      { name: 'right', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'right', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes', type: 'bytes' },
      { name: 'right', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32', type: 'bytes32' },
      { name: 'right', internalType: 'bytes32', type: 'bytes32' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string[]', type: 'string[]' },
      { name: 'right', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'right', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes', type: 'bytes' },
      { name: 'right', internalType: 'bytes', type: 'bytes' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool[]', type: 'bool[]' },
      { name: 'right', internalType: 'bool[]', type: 'bool[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'right', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string[]', type: 'string[]' },
      { name: 'right', internalType: 'string[]', type: 'string[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string', type: 'string' },
      { name: 'right', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'right', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool', type: 'bool' },
      { name: 'right', internalType: 'bool', type: 'bool' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'condition', internalType: 'bool', type: 'bool' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertFalse',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assertFalse',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertGe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertGt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertLe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertLt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'right', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256[]', type: 'int256[]' },
      { name: 'right', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool', type: 'bool' },
      { name: 'right', internalType: 'bool', type: 'bool' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'right', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool', type: 'bool' },
      { name: 'right', internalType: 'bool', type: 'bool' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool[]', type: 'bool[]' },
      { name: 'right', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes', type: 'bytes' },
      { name: 'right', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address[]', type: 'address[]' },
      { name: 'right', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'right', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool[]', type: 'bool[]' },
      { name: 'right', internalType: 'bool[]', type: 'bool[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string', type: 'string' },
      { name: 'right', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address[]', type: 'address[]' },
      { name: 'right', internalType: 'address[]', type: 'address[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string', type: 'string' },
      { name: 'right', internalType: 'string', type: 'string' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address', type: 'address' },
      { name: 'right', internalType: 'address', type: 'address' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32', type: 'bytes32' },
      { name: 'right', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes', type: 'bytes' },
      { name: 'right', internalType: 'bytes', type: 'bytes' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'right', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address', type: 'address' },
      { name: 'right', internalType: 'address', type: 'address' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32', type: 'bytes32' },
      { name: 'right', internalType: 'bytes32', type: 'bytes32' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string[]', type: 'string[]' },
      { name: 'right', internalType: 'string[]', type: 'string[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'right', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string[]', type: 'string[]' },
      { name: 'right', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256[]', type: 'int256[]' },
      { name: 'right', internalType: 'int256[]', type: 'int256[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'right', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertNotEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertNotEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assertTrue',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'condition', internalType: 'bool', type: 'bool' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertTrue',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assume',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'char', internalType: 'string', type: 'string' }],
    name: 'breakpoint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'char', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'breakpoint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newChainId', internalType: 'uint256', type: 'uint256' }],
    name: 'chainId',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clearMockedCalls',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'closeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newCoinbase', internalType: 'address', type: 'address' }],
    name: 'coinbase',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'deployer', internalType: 'address', type: 'address' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'deployer', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'computeCreateAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'string', type: 'string' },
      { name: 'to', internalType: 'string', type: 'string' },
    ],
    name: 'copyFile',
    outputs: [{ name: 'copied', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'createDir',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'urlOrAlias', internalType: 'string', type: 'string' }],
    name: 'createFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'createFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createSelectFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'urlOrAlias', internalType: 'string', type: 'string' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'createSelectFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'urlOrAlias', internalType: 'string', type: 'string' }],
    name: 'createSelectFork',
    outputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'walletLabel', internalType: 'string', type: 'string' }],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'walletLabel', internalType: 'string', type: 'string' },
    ],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'deal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
    name: 'deleteSnapshot',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deleteSnapshots',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'language', internalType: 'string', type: 'string' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'language', internalType: 'string', type: 'string' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newDifficulty', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'difficulty',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pathToStateJson', internalType: 'string', type: 'string' },
    ],
    name: 'dumpState',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool', type: 'bool' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address', type: 'address' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256', type: 'int256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string', type: 'string' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'newRuntimeBytecode', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'etch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fromBlock', internalType: 'uint256', type: 'uint256' },
      { name: 'toBlock', internalType: 'uint256', type: 'uint256' },
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'eth_getLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.EthGetLogs[]',
        type: 'tuple[]',
        components: [
          { name: 'emitter', internalType: 'address', type: 'address' },
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'transactionHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'transactionIndex', internalType: 'uint64', type: 'uint64' },
          { name: 'logIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'removed', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'exists',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'gas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'gas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'minGas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'expectCallMinGas',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'minGas', internalType: 'uint64', type: 'uint64' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'count', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectCallMinGas',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'expectEmit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'checkTopic1', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic2', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic3', internalType: 'bool', type: 'bool' },
      { name: 'checkData', internalType: 'bool', type: 'bool' },
    ],
    name: 'expectEmit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'checkTopic1', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic2', internalType: 'bool', type: 'bool' },
      { name: 'checkTopic3', internalType: 'bool', type: 'bool' },
      { name: 'checkData', internalType: 'bool', type: 'bool' },
      { name: 'emitter', internalType: 'address', type: 'address' },
    ],
    name: 'expectEmit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'emitter', internalType: 'address', type: 'address' }],
    name: 'expectEmit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'revertData', internalType: 'bytes4', type: 'bytes4' }],
    name: 'expectRevert',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'revertData', internalType: 'bytes', type: 'bytes' }],
    name: 'expectRevert',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'expectRevert',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'min', internalType: 'uint64', type: 'uint64' },
      { name: 'max', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectSafeMemory',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'min', internalType: 'uint64', type: 'uint64' },
      { name: 'max', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'expectSafeMemoryCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newBasefee', internalType: 'uint256', type: 'uint256' }],
    name: 'fee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'ffi',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'fsMetadata',
    outputs: [
      {
        name: 'metadata',
        internalType: 'struct VmSafe.FsMetadata',
        type: 'tuple',
        components: [
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
          { name: 'length', internalType: 'uint256', type: 'uint256' },
          { name: 'readOnly', internalType: 'bool', type: 'bool' },
          { name: 'modified', internalType: 'uint256', type: 'uint256' },
          { name: 'accessed', internalType: 'uint256', type: 'uint256' },
          { name: 'created', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [{ name: 'height', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getCode',
    outputs: [
      { name: 'creationBytecode', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getDeployedCode',
    outputs: [
      { name: 'runtimeBytecode', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getLabel',
    outputs: [{ name: 'currentLabel', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'elementSlot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getMappingKeyAndParentOf',
    outputs: [
      { name: 'found', internalType: 'bool', type: 'bool' },
      { name: 'key', internalType: 'bytes32', type: 'bytes32' },
      { name: 'parent', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'mappingSlot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getMappingLength',
    outputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'mappingSlot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'idx', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getMappingSlotAt',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRecordedLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.Log[]',
        type: 'tuple[]',
        components: [
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'emitter', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'isDir',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'isFile',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isPersistent',
    outputs: [{ name: 'persistent', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'keyExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'keyExistsJson',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'keyExistsToml',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newLabel', internalType: 'string', type: 'string' },
    ],
    name: 'label',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'load',
    outputs: [{ name: 'data', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pathToAllocsJson', internalType: 'string', type: 'string' },
    ],
    name: 'loadAllocs',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'makePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account0', internalType: 'address', type: 'address' },
      { name: 'account1', internalType: 'address', type: 'address' },
    ],
    name: 'makePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'makePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account0', internalType: 'address', type: 'address' },
      { name: 'account1', internalType: 'address', type: 'address' },
      { name: 'account2', internalType: 'address', type: 'address' },
    ],
    name: 'makePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'returnData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'returnData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCall',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'msgValue', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'revertData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCallRevert',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'callee', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      { name: 'revertData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mockCallRevert',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseAddress',
    outputs: [
      { name: 'parsedValue', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBool',
    outputs: [{ name: 'parsedValue', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes',
    outputs: [{ name: 'parsedValue', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes32',
    outputs: [
      { name: 'parsedValue', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseInt',
    outputs: [{ name: 'parsedValue', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddressArray',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBoolArray',
    outputs: [{ name: '', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32Array',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytesArray',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonInt',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonIntArray',
    outputs: [{ name: '', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonKeys',
    outputs: [{ name: 'keys', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonString',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonStringArray',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUintArray',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseToml',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'toml', internalType: 'string', type: 'string' }],
    name: 'parseToml',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlAddressArray',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBoolArray',
    outputs: [{ name: '', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBytes',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBytes32',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBytes32Array',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBytesArray',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlInt',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlIntArray',
    outputs: [{ name: '', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlKeys',
    outputs: [{ name: 'keys', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlString',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlStringArray',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlUintArray',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseUint',
    outputs: [
      { name: 'parsedValue', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pauseGasMetering',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'msgSender', internalType: 'address', type: 'address' },
      { name: 'txOrigin', internalType: 'address', type: 'address' },
    ],
    name: 'prank',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'msgSender', internalType: 'address', type: 'address' }],
    name: 'prank',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newPrevrandao', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'prevrandao',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectRoot',
    outputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'readCallers',
    outputs: [
      {
        name: 'callerMode',
        internalType: 'enum VmSafe.CallerMode',
        type: 'uint8',
      },
      { name: 'msgSender', internalType: 'address', type: 'address' },
      { name: 'txOrigin', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
      { name: 'followLinks', internalType: 'bool', type: 'bool' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFile',
    outputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFileBinary',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readLine',
    outputs: [{ name: 'line', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'linkPath', internalType: 'string', type: 'string' }],
    name: 'readLink',
    outputs: [{ name: 'targetPath', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'record',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'recordLogs',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'rememberKey',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'removeDir',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'removeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'input', internalType: 'string', type: 'string' },
      { name: 'from', internalType: 'string', type: 'string' },
      { name: 'to', internalType: 'string', type: 'string' },
    ],
    name: 'replace',
    outputs: [{ name: 'output', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'resetNonce',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'resumeGasMetering',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
    name: 'revertTo',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
    name: 'revertToAndDelete',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'revokePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'revokePersistent',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newHeight', internalType: 'uint256', type: 'uint256' }],
    name: 'roll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'txHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'rollFork',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'forkId', internalType: 'uint256', type: 'uint256' },
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rollFork',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'rollFork',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'forkId', internalType: 'uint256', type: 'uint256' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'rollFork',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'method', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'string', type: 'string' },
    ],
    name: 'rpc',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'rpcAlias', internalType: 'string', type: 'string' }],
    name: 'rpcUrl',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rpcUrlStructs',
    outputs: [
      {
        name: 'urls',
        internalType: 'struct VmSafe.Rpc[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'url', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rpcUrls',
    outputs: [
      { name: 'urls', internalType: 'string[2][]', type: 'string[2][]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'forkId', internalType: 'uint256', type: 'uint256' }],
    name: 'selectFork',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'address', type: 'address' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeJson',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'setEnv',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newNonce', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setNonce',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newNonce', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'setNonceUnsafe',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'signP256',
    outputs: [
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'skipTest', internalType: 'bool', type: 'bool' }],
    name: 'skip',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'duration', internalType: 'uint256', type: 'uint256' }],
    name: 'sleep',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'snapshot',
    outputs: [{ name: 'snapshotId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'input', internalType: 'string', type: 'string' },
      { name: 'delimiter', internalType: 'string', type: 'string' },
    ],
    name: 'split',
    outputs: [{ name: 'outputs', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startMappingRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'msgSender', internalType: 'address', type: 'address' }],
    name: 'startPrank',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'msgSender', internalType: 'address', type: 'address' },
      { name: 'txOrigin', internalType: 'address', type: 'address' },
    ],
    name: 'startPrank',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startStateDiffRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopAndReturnStateDiff',
    outputs: [
      {
        name: 'accountAccesses',
        internalType: 'struct VmSafe.AccountAccess[]',
        type: 'tuple[]',
        components: [
          {
            name: 'chainInfo',
            internalType: 'struct VmSafe.ChainInfo',
            type: 'tuple',
            components: [
              { name: 'forkId', internalType: 'uint256', type: 'uint256' },
              { name: 'chainId', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'kind',
            internalType: 'enum VmSafe.AccountAccessKind',
            type: 'uint8',
          },
          { name: 'account', internalType: 'address', type: 'address' },
          { name: 'accessor', internalType: 'address', type: 'address' },
          { name: 'initialized', internalType: 'bool', type: 'bool' },
          { name: 'oldBalance', internalType: 'uint256', type: 'uint256' },
          { name: 'newBalance', internalType: 'uint256', type: 'uint256' },
          { name: 'deployedCode', internalType: 'bytes', type: 'bytes' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'reverted', internalType: 'bool', type: 'bool' },
          {
            name: 'storageAccesses',
            internalType: 'struct VmSafe.StorageAccess[]',
            type: 'tuple[]',
            components: [
              { name: 'account', internalType: 'address', type: 'address' },
              { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
              { name: 'isWrite', internalType: 'bool', type: 'bool' },
              {
                name: 'previousValue',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              { name: 'newValue', internalType: 'bytes32', type: 'bytes32' },
              { name: 'reverted', internalType: 'bool', type: 'bool' },
            ],
          },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopExpectSafeMemory',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopMappingRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopPrank',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'store',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    name: 'toBase64',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'toBase64',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    name: 'toBase64URL',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'toBase64URL',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'input', internalType: 'string', type: 'string' }],
    name: 'toLowercase',
    outputs: [{ name: 'output', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'input', internalType: 'string', type: 'string' }],
    name: 'toUppercase',
    outputs: [{ name: 'output', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'forkId', internalType: 'uint256', type: 'uint256' },
      { name: 'txHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'transact',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'txHash', internalType: 'bytes32', type: 'bytes32' }],
    name: 'transact',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'input', internalType: 'string', type: 'string' }],
    name: 'trim',
    outputs: [{ name: 'output', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'tryFfi',
    outputs: [
      {
        name: 'result',
        internalType: 'struct VmSafe.FfiResult',
        type: 'tuple',
        components: [
          { name: 'exitCode', internalType: 'int32', type: 'int32' },
          { name: 'stdout', internalType: 'bytes', type: 'bytes' },
          { name: 'stderr', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newGasPrice', internalType: 'uint256', type: 'uint256' }],
    name: 'txGasPrice',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unixTime',
    outputs: [
      { name: 'milliseconds', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newTimestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'warp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'writeFileBinary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeLine',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
    ],
    name: 'writeToml',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
    ],
    name: 'writeToml',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VmSafe
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const vmSafeAbi = [
  {
    type: 'function',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'accesses',
    outputs: [
      { name: 'readSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'writeSlots', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'addr',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqAbs',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqAbs',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqAbs',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqAbs',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqAbsDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqAbsDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqAbsDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqAbsDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqRel',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqRel',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqRel',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqRel',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqRelDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqRelDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertApproxEqRelDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'maxPercentDelta', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertApproxEqRelDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'right', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256[]', type: 'int256[]' },
      { name: 'right', internalType: 'int256[]', type: 'int256[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address', type: 'address' },
      { name: 'right', internalType: 'address', type: 'address' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string', type: 'string' },
      { name: 'right', internalType: 'string', type: 'string' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address[]', type: 'address[]' },
      { name: 'right', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address[]', type: 'address[]' },
      { name: 'right', internalType: 'address[]', type: 'address[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool', type: 'bool' },
      { name: 'right', internalType: 'bool', type: 'bool' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address', type: 'address' },
      { name: 'right', internalType: 'address', type: 'address' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'right', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool[]', type: 'bool[]' },
      { name: 'right', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256[]', type: 'int256[]' },
      { name: 'right', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32', type: 'bytes32' },
      { name: 'right', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'right', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes', type: 'bytes' },
      { name: 'right', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32', type: 'bytes32' },
      { name: 'right', internalType: 'bytes32', type: 'bytes32' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string[]', type: 'string[]' },
      { name: 'right', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'right', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes', type: 'bytes' },
      { name: 'right', internalType: 'bytes', type: 'bytes' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool[]', type: 'bool[]' },
      { name: 'right', internalType: 'bool[]', type: 'bool[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'right', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string[]', type: 'string[]' },
      { name: 'right', internalType: 'string[]', type: 'string[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string', type: 'string' },
      { name: 'right', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'right', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool', type: 'bool' },
      { name: 'right', internalType: 'bool', type: 'bool' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'condition', internalType: 'bool', type: 'bool' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertFalse',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assertFalse',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertGe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertGt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertGtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertGtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertLe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLe',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLeDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertLt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLt',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertLtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertLtDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'right', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256[]', type: 'int256[]' },
      { name: 'right', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool', type: 'bool' },
      { name: 'right', internalType: 'bool', type: 'bool' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'right', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool', type: 'bool' },
      { name: 'right', internalType: 'bool', type: 'bool' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool[]', type: 'bool[]' },
      { name: 'right', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes', type: 'bytes' },
      { name: 'right', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address[]', type: 'address[]' },
      { name: 'right', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'right', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bool[]', type: 'bool[]' },
      { name: 'right', internalType: 'bool[]', type: 'bool[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string', type: 'string' },
      { name: 'right', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address[]', type: 'address[]' },
      { name: 'right', internalType: 'address[]', type: 'address[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string', type: 'string' },
      { name: 'right', internalType: 'string', type: 'string' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address', type: 'address' },
      { name: 'right', internalType: 'address', type: 'address' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32', type: 'bytes32' },
      { name: 'right', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes', type: 'bytes' },
      { name: 'right', internalType: 'bytes', type: 'bytes' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'right', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'address', type: 'address' },
      { name: 'right', internalType: 'address', type: 'address' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32', type: 'bytes32' },
      { name: 'right', internalType: 'bytes32', type: 'bytes32' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string[]', type: 'string[]' },
      { name: 'right', internalType: 'string[]', type: 'string[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'right', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'string[]', type: 'string[]' },
      { name: 'right', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256[]', type: 'int256[]' },
      { name: 'right', internalType: 'int256[]', type: 'int256[]' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'right', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
    ],
    name: 'assertNotEq',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertNotEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'int256', type: 'int256' },
      { name: 'right', internalType: 'int256', type: 'int256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'assertNotEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'left', internalType: 'uint256', type: 'uint256' },
      { name: 'right', internalType: 'uint256', type: 'uint256' },
      { name: 'decimals', internalType: 'uint256', type: 'uint256' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertNotEqDecimal',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assertTrue',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'condition', internalType: 'bool', type: 'bool' },
      { name: 'error', internalType: 'string', type: 'string' },
    ],
    name: 'assertTrue',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'condition', internalType: 'bool', type: 'bool' }],
    name: 'assume',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'char', internalType: 'string', type: 'string' }],
    name: 'breakpoint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'char', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'breakpoint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'broadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'closeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'deployer', internalType: 'address', type: 'address' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'deployer', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'computeCreateAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'string', type: 'string' },
      { name: 'to', internalType: 'string', type: 'string' },
    ],
    name: 'copyFile',
    outputs: [{ name: 'copied', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'createDir',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'walletLabel', internalType: 'string', type: 'string' }],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'walletLabel', internalType: 'string', type: 'string' },
    ],
    name: 'createWallet',
    outputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'language', internalType: 'string', type: 'string' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
      { name: 'language', internalType: 'string', type: 'string' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'mnemonic', internalType: 'string', type: 'string' },
      { name: 'derivationPath', internalType: 'string', type: 'string' },
      { name: 'index', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'deriveKey',
    outputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envAddress',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBool',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envBytes32',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envInt',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool', type: 'bool' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address', type: 'address' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'int256', type: 'int256' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'string', type: 'string' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
      { name: 'defaultValue', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'envOr',
    outputs: [{ name: 'value', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envString',
    outputs: [{ name: 'value', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'delim', internalType: 'string', type: 'string' },
    ],
    name: 'envUint',
    outputs: [{ name: 'value', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fromBlock', internalType: 'uint256', type: 'uint256' },
      { name: 'toBlock', internalType: 'uint256', type: 'uint256' },
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'eth_getLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.EthGetLogs[]',
        type: 'tuple[]',
        components: [
          { name: 'emitter', internalType: 'address', type: 'address' },
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'blockNumber', internalType: 'uint64', type: 'uint64' },
          { name: 'transactionHash', internalType: 'bytes32', type: 'bytes32' },
          { name: 'transactionIndex', internalType: 'uint64', type: 'uint64' },
          { name: 'logIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'removed', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'exists',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'ffi',
    outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'fsMetadata',
    outputs: [
      {
        name: 'metadata',
        internalType: 'struct VmSafe.FsMetadata',
        type: 'tuple',
        components: [
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
          { name: 'length', internalType: 'uint256', type: 'uint256' },
          { name: 'readOnly', internalType: 'bool', type: 'bool' },
          { name: 'modified', internalType: 'uint256', type: 'uint256' },
          { name: 'accessed', internalType: 'uint256', type: 'uint256' },
          { name: 'created', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [{ name: 'height', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getCode',
    outputs: [
      { name: 'creationBytecode', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'artifactPath', internalType: 'string', type: 'string' }],
    name: 'getDeployedCode',
    outputs: [
      { name: 'runtimeBytecode', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getLabel',
    outputs: [{ name: 'currentLabel', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'elementSlot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getMappingKeyAndParentOf',
    outputs: [
      { name: 'found', internalType: 'bool', type: 'bool' },
      { name: 'key', internalType: 'bytes32', type: 'bytes32' },
      { name: 'parent', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'mappingSlot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getMappingLength',
    outputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'mappingSlot', internalType: 'bytes32', type: 'bytes32' },
      { name: 'idx', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getMappingSlotAt',
    outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'getNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRecordedLogs',
    outputs: [
      {
        name: 'logs',
        internalType: 'struct VmSafe.Log[]',
        type: 'tuple[]',
        components: [
          { name: 'topics', internalType: 'bytes32[]', type: 'bytes32[]' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'emitter', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'isDir',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'isFile',
    outputs: [{ name: 'result', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'keyExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'keyExistsJson',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'keyExistsToml',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'newLabel', internalType: 'string', type: 'string' },
    ],
    name: 'label',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'target', internalType: 'address', type: 'address' },
      { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'load',
    outputs: [{ name: 'data', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseAddress',
    outputs: [
      { name: 'parsedValue', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBool',
    outputs: [{ name: 'parsedValue', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes',
    outputs: [{ name: 'parsedValue', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseBytes32',
    outputs: [
      { name: 'parsedValue', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseInt',
    outputs: [{ name: 'parsedValue', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJson',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonAddressArray',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBoolArray',
    outputs: [{ name: '', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytes32Array',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonBytesArray',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonInt',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonIntArray',
    outputs: [{ name: '', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonKeys',
    outputs: [{ name: 'keys', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonString',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonStringArray',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseJsonUintArray',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseToml',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'toml', internalType: 'string', type: 'string' }],
    name: 'parseToml',
    outputs: [{ name: 'abiEncodedData', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlAddressArray',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBoolArray',
    outputs: [{ name: '', internalType: 'bool[]', type: 'bool[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBytes',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBytes32',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBytes32Array',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlBytesArray',
    outputs: [{ name: '', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlInt',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlIntArray',
    outputs: [{ name: '', internalType: 'int256[]', type: 'int256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlKeys',
    outputs: [{ name: 'keys', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlString',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlStringArray',
    outputs: [{ name: '', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlUint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'toml', internalType: 'string', type: 'string' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'parseTomlUintArray',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    name: 'parseUint',
    outputs: [
      { name: 'parsedValue', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pauseGasMetering',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'projectRoot',
    outputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'maxDepth', internalType: 'uint64', type: 'uint64' },
      { name: 'followLinks', internalType: 'bool', type: 'bool' },
    ],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readDir',
    outputs: [
      {
        name: 'entries',
        internalType: 'struct VmSafe.DirEntry[]',
        type: 'tuple[]',
        components: [
          { name: 'errorMessage', internalType: 'string', type: 'string' },
          { name: 'path', internalType: 'string', type: 'string' },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
          { name: 'isDir', internalType: 'bool', type: 'bool' },
          { name: 'isSymlink', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFile',
    outputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readFileBinary',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'readLine',
    outputs: [{ name: 'line', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'linkPath', internalType: 'string', type: 'string' }],
    name: 'readLink',
    outputs: [{ name: 'targetPath', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'record',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'recordLogs',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'rememberKey',
    outputs: [{ name: 'keyAddr', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'recursive', internalType: 'bool', type: 'bool' },
    ],
    name: 'removeDir',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'path', internalType: 'string', type: 'string' }],
    name: 'removeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'input', internalType: 'string', type: 'string' },
      { name: 'from', internalType: 'string', type: 'string' },
      { name: 'to', internalType: 'string', type: 'string' },
    ],
    name: 'replace',
    outputs: [{ name: 'output', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'resumeGasMetering',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'method', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'string', type: 'string' },
    ],
    name: 'rpc',
    outputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'rpcAlias', internalType: 'string', type: 'string' }],
    name: 'rpcUrl',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rpcUrlStructs',
    outputs: [
      {
        name: 'urls',
        internalType: 'struct VmSafe.Rpc[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'url', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rpcUrls',
    outputs: [
      { name: 'urls', internalType: 'string[2][]', type: 'string[2][]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'address', type: 'address' },
    ],
    name: 'serializeAddress',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bool[]', type: 'bool[]' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'serializeBool',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'serializeBytes',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'serializeBytes32',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'int256[]', type: 'int256[]' },
    ],
    name: 'serializeInt',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeJson',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'serializeString',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'objectKey', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'serializeUint',
    outputs: [{ name: 'json', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'value', internalType: 'string', type: 'string' },
    ],
    name: 'setEnv',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'wallet',
        internalType: 'struct VmSafe.Wallet',
        type: 'tuple',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'publicKeyX', internalType: 'uint256', type: 'uint256' },
          { name: 'publicKeyY', internalType: 'uint256', type: 'uint256' },
          { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'sign',
    outputs: [
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'privateKey', internalType: 'uint256', type: 'uint256' },
      { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'signP256',
    outputs: [
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'duration', internalType: 'uint256', type: 'uint256' }],
    name: 'sleep',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'input', internalType: 'string', type: 'string' },
      { name: 'delimiter', internalType: 'string', type: 'string' },
    ],
    name: 'split',
    outputs: [{ name: 'outputs', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'signer', internalType: 'address', type: 'address' }],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'privateKey', internalType: 'uint256', type: 'uint256' }],
    name: 'startBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startMappingRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startStateDiffRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopAndReturnStateDiff',
    outputs: [
      {
        name: 'accountAccesses',
        internalType: 'struct VmSafe.AccountAccess[]',
        type: 'tuple[]',
        components: [
          {
            name: 'chainInfo',
            internalType: 'struct VmSafe.ChainInfo',
            type: 'tuple',
            components: [
              { name: 'forkId', internalType: 'uint256', type: 'uint256' },
              { name: 'chainId', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'kind',
            internalType: 'enum VmSafe.AccountAccessKind',
            type: 'uint8',
          },
          { name: 'account', internalType: 'address', type: 'address' },
          { name: 'accessor', internalType: 'address', type: 'address' },
          { name: 'initialized', internalType: 'bool', type: 'bool' },
          { name: 'oldBalance', internalType: 'uint256', type: 'uint256' },
          { name: 'newBalance', internalType: 'uint256', type: 'uint256' },
          { name: 'deployedCode', internalType: 'bytes', type: 'bytes' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
          { name: 'reverted', internalType: 'bool', type: 'bool' },
          {
            name: 'storageAccesses',
            internalType: 'struct VmSafe.StorageAccess[]',
            type: 'tuple[]',
            components: [
              { name: 'account', internalType: 'address', type: 'address' },
              { name: 'slot', internalType: 'bytes32', type: 'bytes32' },
              { name: 'isWrite', internalType: 'bool', type: 'bool' },
              {
                name: 'previousValue',
                internalType: 'bytes32',
                type: 'bytes32',
              },
              { name: 'newValue', internalType: 'bytes32', type: 'bytes32' },
              { name: 'reverted', internalType: 'bool', type: 'bool' },
            ],
          },
          { name: 'depth', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopBroadcast',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stopMappingRecording',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    name: 'toBase64',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'toBase64',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'string', type: 'string' }],
    name: 'toBase64URL',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'toBase64URL',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'input', internalType: 'string', type: 'string' }],
    name: 'toLowercase',
    outputs: [{ name: 'output', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'address', type: 'address' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
    name: 'toString',
    outputs: [
      { name: 'stringifiedValue', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'input', internalType: 'string', type: 'string' }],
    name: 'toUppercase',
    outputs: [{ name: 'output', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'input', internalType: 'string', type: 'string' }],
    name: 'trim',
    outputs: [{ name: 'output', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'commandInput', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'tryFfi',
    outputs: [
      {
        name: 'result',
        internalType: 'struct VmSafe.FfiResult',
        type: 'tuple',
        components: [
          { name: 'exitCode', internalType: 'int32', type: 'int32' },
          { name: 'stdout', internalType: 'bytes', type: 'bytes' },
          { name: 'stderr', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unixTime',
    outputs: [
      { name: 'milliseconds', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeFile',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'writeFileBinary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
    ],
    name: 'writeJson',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'data', internalType: 'string', type: 'string' },
    ],
    name: 'writeLine',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
      { name: 'valueKey', internalType: 'string', type: 'string' },
    ],
    name: 'writeToml',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'json', internalType: 'string', type: 'string' },
      { name: 'path', internalType: 'string', type: 'string' },
    ],
    name: 'writeToml',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stdError
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdErrorAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'arithmeticError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'assertionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'divisionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'encodeStorageError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'enumConversionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'indexOOBError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'memOverflowError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'popError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'zeroVarError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stdStorageSafe
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdStorageSafeAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'who', internalType: 'address', type: 'address', indexed: false },
      { name: 'fsig', internalType: 'bytes4', type: 'bytes4', indexed: false },
      {
        name: 'keysHash',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'slot',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SlotFound',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'who', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'slot',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'WARNING_UninitedSlot',
  },
] as const
