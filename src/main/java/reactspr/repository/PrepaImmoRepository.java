package reactspr.repository;
import reactspr.domain.PrepaImmo;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Personne entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PrepaImmoRepository extends JpaRepository<PrepaImmo, Long> {
}
