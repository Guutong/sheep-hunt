var checkSheep = function (di, dj, d) {
    for (let i = 0; i < di; i++) {
        for (let j = 0; j < dj; j++) {
            if (d[i][j] == 1) {
                
                // O
                // 00 01
                // 10 11
                if (d.length > i + 1 && d[i].length > j + 1) {
                    if (d[i][j + 1] == 1 && d[i + 1][j] == 1 && d[i + 1][j + 1] == 1) {
                        return true;
                    }
                }
            
                // L
                if (di > i + 2 && dj > j + 1) {

                    // 00
                    // 10   
                    // 20 21   
                    if (d[i + 1][j] == 1 && d[i + 2][j] == 1 && d[i + 2][j + 1] == 1) {
                        return true;
                    }

                    // 00 01
                    //    11
                    //    21
                    if (d[i][j + 1] == 1 && d[i + 1][j + 1] == 1 && d[i + 2][j + 1] == 1) {
                        return true;
                    }
                }

                if (di > i + 1) {

                    // 00 01 02
                    // 10   
                    if (dj > j + 2) {
                        if (d[i][j + 1] == 1 && d[i][j + 2] == 1 && d[i + 1][j] == 1) {
                            return true;
                        }
                    }

                    //       02
                    // 10 11 12 
                    if (dj > j) {
                        if (d[i + 1][j] == 1 && d[i + 1][j - 1] == 1 && d[i + 1][j - 2] == 1) {
                            return true;
                        }
                    }
                }
                
                // J
                //    01
                //    11
                // 20 21
                if (di > i + 2 && dj > j - 1) {
                    if (d[i + 1][j] == 1 && d[i + 2][j - 1] == 1 && d[i + 2][j] == 1) {
                        return true;
                    }
                }

                // 00 01 02
                //       12
                if (di > i + 1 && dj > j + 2) {
                    if (d[i][j + 1] == 1 && d[i][j + 2] == 1 && d[i + 1][j + 2] == 1) {
                        return true;
                    }
                }

                // 00 
                // 10 11 12
                if (di > i + 1 && dj > j + 2) {
                    if (d[i + 1][j] == 1 && d[i + 1][j + 1] == 1 && d[i + 1][j + 2] == 1) {
                        return true;
                    }
                }

                // 00 01
                // 10
                // 20
                if (di > i + 1 && dj > j + 1) {
                    if (d[i][j + 1] == 1 && d[i + 1][j] == 1 && d[i + 1][j] == 1) {
                        return true;
                    }
                }
            
                // T
                // 00 01 02
                //    11
                if (di > i + 1 && dj > j + 2) {
                    if (d[i][j + 1] == 1 && d[i][j + 2] == 1 && d[i + 1][j + 1] == 1) {
                        return true;
                    }
                }

                //    01
                // 10 11 12
                if (di > i + 1 && dj > j + 1) {
                    if (d[i + 1][j - 1] == 1 && d[i + 1][j] == 1 && d[i + 1][j + 1] == 1) {
                        return true;
                    }
                }

                //    01
                // 10 11
                //    21
                if (di > i + 2 && dj > j) {
                    if (d[i + 1][j] == 1 && d[i + 2][j] == 1 && d[i + 2][j] == 1) {
                        return true;
                    }
                }

                // 00
                // 10 11
                // 20
                if (di > i + 2 && dj > j + 1) {
                    if (d[i + 1][j] == 1 && d[i + 1][j + 1] == 1 && d[i + 2][j] == 1) {
                        return true;
                    }
                }
            
                // S
                //    01 02
                // 10 11
                if (di > i + 1 && dj > j + 1) {
                    if (d[i][j + 1] == 1 && d[i + 1][j - 1] == 1 && d[i + 1][j] == 1) {
                        return true;
                    }
                }

                // 00 
                // 10 11
                //    21
                if (di > i + 2 && dj > j + 1) {
                    if (d[i + 1][j] == 1 && d[i + 1][j + 1] == 1 && d[i + 2][j + 1] == 1) {
                        return true;
                    }
                }
            
                // Z
                // 00 01
                //    11 12
                if (di > i + 1 && dj > j + 2) {
                    if (d[i][j + 1] == 1 && d[i + 1][j + 1] == 1 && d[i + 1][j + 2] == 1) {
                        return true;
                    }
                }
                
                //    01
                // 10 11
                // 20 
                if (di > i + 3 && dj > j) {
                    if (d[i + 1][j - 1] == 1 && d[i + 1][j] == 1 && d[i + 2][j - 1] == 1) {
                        return true;
                    }
                }
            
                // I
                // 00
                // 10
                // 20
                // 30
                if (di > i + 3 && dj > j) {
                    if (d[i + 1][j] == 1 && d[i + 2][j] == 1 && d[i + 3][j] == 1) {
                        return true;
                    }
                }

                // 00 01 02 03
                if (di > i && dj > j + 3) {
                    if (d[i][j + 1] == 1 && d[i][j + 2] == 1 && d[i][j + 3] == 1) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
};