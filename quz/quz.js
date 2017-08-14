/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
	/** Fill in here **/
	var elem = A, last;
	while (elem) {
		last = elem;
		elem = elem.tail;
	}
	last.tail = B;
	return A;
}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {
	/** Fill in here **/
	var res = [];
	var elem = L;
	var n = 0;
	while (elem) {
		if (n >= start && n <= start + len) {
			res.push(elem.head);
			if (n == start + len) break;
		}
		n++;
		elem = elem.tail;
	}
	return List.list(res);
}
