package reactspr.repository;

import reactspr.domain.PrepaImmo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Personne entity.
 */
@Repository
public interface PrepaImmoRepository extends JpaRepository<PrepaImmo, Long> {

    Page<PrepaImmo> findAll(Pageable pageable);
}
