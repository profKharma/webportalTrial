// Filter checks
if (filters.mda && cells[0].textContent !== filters.mda) {
    matchesFilters = false;
}
if (filters.requestType && cells[2].textContent !== filters.requestType) {
    matchesFilters = false;
}
if (filters.status && cells[3].textContent !== filters.status) {
    matchesFilters = false;
}
if (filters.priority && cells[6].textContent !== filters.priority) {
    matchesFilters = false;
}
if (filters.startDate) {
    const rowDate = new Date(cells[4].textContent);
    const filterDate = new Date(filters.startDate);
    if (rowDate < filterDate) matchesFilters = false;
}
if (filters.endDate) {
    const rowDate = new Date(cells[5].textContent);
    const filterDate = new Date(filters.endDate);
    if (rowDate > filterDate) matchesFilters = false;
}

row.style.display = matchesSearch && matchesFilters ? '' : 'none';
if (matchesSearch && matchesFilters) {
    hasResults = true;
}
    });

noResultsRow.style.display = (term !== '' || Object.keys(filters).length > 0) && !hasResults ? '' : 'none';
  }

if (searchField && searchBtn) {
    searchField.addEventListener('input', function () {
        const searchTerm = this.value.trim();
        searchBtn.disabled = searchTerm === '';
        searchBtn.classList.toggle('btn-search-active', searchTerm !== '');
        filterTable(searchTerm, getCurrentFilters());
    });

    if (searchField.value.trim() === '') {
        searchBtn.disabled = true;
        searchBtn.classList.remove('btn-search-active');
    }
}

// --- Filter Modal Functionality ---
function getCurrentFilters() {
    return {
        mda: filterMDA?.value || '',
        requestType: filterRequestType?.value || '',
        status: filterStatus?.value || '',
        priority: filterPriority?.value || '',
        startDate: filterStartDate?.value || '',
        endDate: filterEndDate?.value || ''
    };
}

if (filterBtn && filterModalElement) {
    filterBtn.addEventListener('click', function () {
        const modalInstance = bootstrap.Modal.getOrCreateInstance(filterModalElement);
        modalInstance.show();
    });
}

if (applyFilterBtn) {
    applyFilterBtn.addEventListener('click', function () {
        const filters = getCurrentFilters();
        filterTable(searchField?.value.trim() || '', filters);
        const modalInstance = bootstrap.Modal.getOrCreateInstance(filterModalElement);
        modalInstance.hide();
    });
}

if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', function () {
        filterMDA.value = '';
        filterRequestType.value = '';
        filterStatus.value = '';
        filterPriority.value = '';
        filterStartDate.value = '';
        filterEndDate.value = '';
        filterTable(searchField?.value.trim() || '', {});
    });
}

// --- Sorting Functionality ---
function sortTable(columnIndex, sortDir) {
    allRows.sort((a, b) => {
        let aValue = a.children[columnIndex].textContent.trim();
        let bValue = b.children[columnIndex].textContent.trim();

        // Handle date columns
        if (columnIndex === 4 || columnIndex === 5) {
            aValue = new Date(aValue);
            bValue = new Date(bValue);
        }

        if (sortDir === 'asc') {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    });

    // Clear table body and re-append sorted rows
    tableBody.innerHTML = '';
    allRows.forEach(row => tableBody.appendChild(row));
    tableBody.appendChild(noResultsRow); // Ensure noResultsRow stays at the end
}

if (table) {
    const headers = table.querySelectorAll('th[data-sort]');
    headers.forEach((header, index) => {
        const sortIcon = header.querySelector('.sort-icon');
        if (sortIcon) {
            header.addEventListener('click', function () {
                const column = header.dataset.sort;
                let newSortDir = 'asc';

                if (currentSortColumn === column) {
                    newSortDir = currentSortDir === 'asc' ? 'desc' : 'asc';
                }

                // Reset all sort icons
                headers.forEach(h => {
                    const icon = h.querySelector('.sort-icon');
                    if (icon) {
                        icon.classList.remove('asc', 'desc', 'active');
                        icon.dataset.sortDir = 'none';
                    }
                });

                // Update current sort icon
                sortIcon.classList.add(newSortDir, 'active');
                sortIcon.dataset.sortDir = newSortDir;

                currentSortColumn = column;
                currentSortDir = newSortDir;

                sortTable(index, newSortDir);
                filterTable(searchField?.value.trim() || '', getCurrentFilters()); // Re-apply filters after sorting
            });
        }
    });


   
</script>
}