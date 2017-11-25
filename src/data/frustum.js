let frustumSize = 1
let frustumHeight = 2
let frustumUniqVertices = [
    [-frustumSize/2, 0, frustumSize/2],
    [frustumSize/2, 0, frustumSize/2],
    [frustumSize/2, 0, -frustumSize/2],
    [-frustumSize/2, 0, -frustumSize/2],
    [0, frustumHeight, 0],
]
let frustumVertices = [
    ...frustumUniqVertices[0],
    ...frustumUniqVertices[3],
    ...frustumUniqVertices[2],

    ...frustumUniqVertices[0],
    ...frustumUniqVertices[2],
    ...frustumUniqVertices[1],

    ...frustumUniqVertices[1],
    ...frustumUniqVertices[2],
    ...frustumUniqVertices[4],

    ...frustumUniqVertices[2],
    ...frustumUniqVertices[3],
    ...frustumUniqVertices[4],

    ...frustumUniqVertices[3],
    ...frustumUniqVertices[0],
    ...frustumUniqVertices[4],

    ...frustumUniqVertices[0],
    ...frustumUniqVertices[1],
    ...frustumUniqVertices[4]
]

