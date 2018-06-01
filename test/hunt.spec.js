describe('hunt', () => {

    it('should checkSheep is function', () => {
        expect(typeof checkSheep).toEqual('function');
    });

    describe('pattern O', () => {

        it('should return false when found three sheep', () => {
            const data = [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 1, 1]
            ];
            expect(checkSheep(4, 4, data)).toEqual(false);
        });

        it('should return true when found four sheep on bottom right', () => {
            const data = [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 1, 1],
                [0, 0, 1, 1]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });

        it('should return true when found four sheep on top left', () => {
            const data = [
                [1, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });

    });

    describe('pattern L', () => {

        it('should return true when found sheep L pattern on bottom right', () => {
            const data = [
                [0, 0, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 1, 0],
                [0, 0, 1, 1]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });

        it('should return true when found sheep L rotage 90 degree pattern on bottom right', () => {
            const data = [
                [0, 0, 0, 0],
                [0, 0, 1, 1],
                [0, 0, 0, 1],
                [0, 0, 0, 1]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });

        it('should return true when found sheep L right rotage 45 degree pattern on top left', () => {
            const data = [
                [1, 1, 1, 0],
                [1, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });

        it('should return true when found sheep L left rotage 45 degree pattern on top left', () => {
            const data = [
                [0, 0, 1, 0],
                [1, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });

    });

    describe('pattern J', () => {

        it('should return true when found sheep J pattern on top left', () => {
            const data = [
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });

        it('should return true when found sheep J rotage 90 degree pattern on top left', () => {
            const data = [
                [1, 1, 0, 0],
                [1, 0, 0, 0],
                [1, 0, 0, 0],
                [0, 0, 0, 0]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });

        it('should return true when found sheep J right rotage 45 degree pattern on bottom right', () => {
            const data = [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 1, 1, 1],
                [0, 0, 0, 1]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });

        it('should return true when found sheep J left rotage 45 degree pattern on bottom right', () => {
            const data = [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 1, 1]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });

    });

    describe('pattern T', () => {

        it('should return true when found sheep T pattern on top left', () => {
            const data = [
                [1, 1, 1, 0],
                [0, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });

        it('should return true when found sheep T rotage 90 degree pattern on top left', () => {
            const data = [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });

        it('should return true when found sheep T right rotage 45 degree pattern on top left', () => {
            const data = [
                [0, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 0, 0]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });

        it('should return true when found sheep T left rotage 45 degree pattern on top left', () => {
            const data = [
                [1, 0, 0, 0],
                [1, 1, 0, 0],
                [1, 0, 0, 0],
                [0, 0, 0, 0]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });

    });

    describe('pattern S', () => {
        it('should return true when found sheep S pattern on top left', () => {
            const data = [
                [0, 1, 1, 0],
                [1, 1, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });

        it('should return true when found sheep S rotage 45 degree pattern on top left', () => {
            const data = [
                [1, 0, 0, 0],
                [1, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 0, 0]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });
    });

    describe('pattern Z', () => {
        it('should return true when found sheep Z pattern on top left', () => {
            const data = [
                [1, 1, 0, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });

        it('should return true when found sheep Z rotage 45 degree pattern on top left', () => {
            const data = [
                [0, 1, 0, 0],
                [1, 1, 0, 0],
                [1, 0, 0, 0],
                [0, 0, 0, 0]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });
    });

    describe('pattern I', () => {
        it('should return true when found sheep I pattern on top left', () => {
            const data = [
                [1, 0, 0, 0],
                [1, 0, 0, 0],
                [1, 0, 0, 0],
                [1, 0, 0, 0]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });

        it('should return true when found sheep I rotage 45 degree pattern on top left', () => {
            const data = [
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ];
            expect(checkSheep(4, 4, data)).toEqual(true);
        });
    });

});