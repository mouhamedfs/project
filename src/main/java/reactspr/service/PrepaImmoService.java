package reactspr.service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactspr.domain.PrepaImmo;
import reactspr.repository.PrepaImmoRepository;
@Service
@Transactional
public class PrepaImmoService {
    private final PrepaImmoRepository prepaImmoRepository ;
    public PrepaImmoService(PrepaImmoRepository prepaImmoRepository) {
		this.prepaImmoRepository = prepaImmoRepository;
	}
 
    @Transactional
    public Page<PrepaImmo> getAllManagedPage(Pageable pageable) {
        return prepaImmoRepository.findAll(pageable);
    }
}
