package reactspr.repository;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import reactspr.domain.Agence;

/**
 * Spring Data  repository for the Agence entity.
 */
@Repository
public interface AgenceRepository extends JpaRepository<Agence, Long> {
}
